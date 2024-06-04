"use client";
import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Grid,
  Autocomplete,
} from "@mui/material";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Controller, useForm, FieldValues } from "react-hook-form";
import { useCreateTripMutation } from "@/redux/features/trip/tripApi";

// Initial sample options for the activities field
const initialActivityOptions = [
  { label: "Hiking", value: "hiking" },
  { label: "Swimming", value: "swimming" },
  { label: "Sightseeing", value: "sightseeing" },
  { label: "Camping", value: "camping" },
];

const PostTravelTrip = () => {
  const user = useAppSelector(selectCurrentUser);
  const router = useRouter();
  const [createTripTravel] = useCreateTripMutation();
  const { register, handleSubmit, control, reset } = useForm();
  const [activityOptions, setActivityOptions] = useState(
    initialActivityOptions
  );

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Creating trip...");
    try {
      const activities = data.activities.map((activity: any) => activity.label);

      const budget = Number(data.budget);
      const updatedData = { ...data, activities, budget };
      const res: any = await createTripTravel(updatedData);
      if (res?.data?.success === true) {
        toast.success("Trip created successfully", { id: toastId });
      }
      reset();
    } catch (error) {
      toast.error("Something went wrong", {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4" align="center" mb={4}>
          Post a Travel/Trip
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Destination"
                variant="outlined"
                fullWidth
                required
                {...register("destination")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                type="date"
                fullWidth
                required
                {...register("startDate")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                type="date"
                fullWidth
                required
                {...register("endDate")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Trip Type"
                variant="outlined"
                fullWidth
                required
                {...register("type")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Trip Photo"
                variant="outlined"
                fullWidth
                required
                {...register("photo")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="number"
                label="Budget"
                variant="outlined"
                fullWidth
                required
                {...register("budget")}
              />
            </Grid>
            {/* Multi-selection field for activities */}
            <Grid item xs={12} sm={6}>
              <Controller
                name="activities"
                control={control}
                defaultValue={[]}
                render={({ field }) => (
                  <Autocomplete
                    multiple
                    freeSolo
                    options={activityOptions}
                    getOptionLabel={(option) => option.label || option}
                    isOptionEqualToValue={(option, value) =>
                      option.value === value.value
                    }
                    value={field.value}
                    onChange={(event, newValue) => {
                      const lastAddedOption = newValue[newValue.length - 1];
                      if (typeof lastAddedOption === "string") {
                        const newOption = {
                          label: lastAddedOption,
                          value: lastAddedOption
                            .toLowerCase()
                            .replace(/ /g, "-"),
                        };
                        setActivityOptions([...activityOptions, newOption]);
                        field.onChange([...field.value, newOption]);
                      } else {
                        field.onChange(newValue);
                      }
                    }}
                    filterOptions={(options, params) => {
                      const filtered = options.filter((option) =>
                        option.label
                          .toLowerCase()
                          .includes(params.inputValue.toLowerCase())
                      );

                      // Suggest the creation of a new value
                      if (
                        params.inputValue !== "" &&
                        !filtered.some(
                          (option) =>
                            option.label.toLowerCase() ===
                            params.inputValue.toLowerCase()
                        )
                      ) {
                        filtered.push({
                          label: `"${params.inputValue}"`,
                          value: params.inputValue,
                        });
                      }

                      return filtered;
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        label="Select Activities"
                        placeholder="Type to search"
                      />
                    )}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Detailed Description"
                variant="outlined"
                fullWidth
                required
                multiline
                rows={4}
                {...register("description")}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Create Trip
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default PostTravelTrip;
