import { Box, TextField, Button } from "@mui/material";

const SearchBar = () => {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        marginTop: "-30px",
        padding: "0 20px",
        height: "80px", // Adjust height
        width: "100%", // Adjust width
      }}
    >
      <TextField
        label="Destination"
        variant="outlined"
        sx={{
          width: "200px", // Adjust width
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#2196f3", // Change border color
            },
            "&:hover fieldset": {
              borderColor: "#1976d2", // Change border color on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: "#2196f3", // Change border color when focused
            },
          },
          "& .MuiInputBase-input": {
            color: "#333", // Change font color
          },
        }}
      />
      <TextField
        label="Travel Dates"
        type="date"
        InputLabelProps={{ shrink: true }}
        variant="outlined"
        sx={{
          width: "200px", // Adjust width
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#2196f3", // Change border color
            },
            "&:hover fieldset": {
              borderColor: "#1976d2", // Change border color on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: "#2196f3", // Change border color when focused
            },
          },
          "& .MuiInputBase-input": {
            color: "#333", // Change font color
          },
        }}
      />
      <TextField
        label="Travel Type"
        variant="outlined"
        sx={{
          width: "200px", // Adjust width
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#2196f3", // Change border color
            },
            "&:hover fieldset": {
              borderColor: "#1976d2", // Change border color on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: "#2196f3", // Change border color when focused
            },
          },
          "& .MuiInputBase-input": {
            color: "#333", // Change font color
          },
        }}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{
          height: "60%", // Adjust height
          borderRadius: "30px", // Adjust border radius for a rounded button
          backgroundColor: "green", // Change background color
          color: "#fff", // Change font color
          "&:hover": {
            backgroundColor: "#1976d2", // Change hover background color
          },
        }}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
