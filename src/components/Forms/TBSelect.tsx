import { MenuItem, SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TTBSelectProps = {
  name: string;
  label?: string;
  items: string[];
  size?: "small" | "medium";
  fullWidth?: boolean;
  sx?: SxProps;
  required?: boolean;
};

const TBSelect = ({
  name,
  label,
  items,
  size = "small",
  fullWidth = true,
  sx,
  required,
}: TTBSelectProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          select
          variant="outlined"
          size={size}
          fullWidth={fullWidth}
          sx={sx}
          required={required}
          error={!!error?.message}
          helperText={error?.message}
        >
          {items?.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
};

export default TBSelect;
