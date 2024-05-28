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
        marginTop: "-40px",
        padding: "10px 20px",
        height: "auto",
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        borderRadius: "10px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <TextField
        label="Destination"
        variant="outlined"
        sx={{
          width: "250px",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#ffffff",
            },
            "&:hover fieldset": {
              borderColor: "#FF4081",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#FF4081",
            },
            backgroundColor: "#ffffff",
            borderRadius: "10px",
          },
          "& .MuiInputBase-input": {
            color: "#333",
          },
          "& .MuiInputLabel-root": {
            color: "#333",
          },
        }}
      />
      <TextField
        label="Travel Dates"
        type="date"
        InputLabelProps={{ shrink: true }}
        variant="outlined"
        sx={{
          width: "250px",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#ffffff",
            },
            "&:hover fieldset": {
              borderColor: "#FF4081",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#FF4081",
            },
            backgroundColor: "#ffffff",
            borderRadius: "10px",
          },
          "& .MuiInputBase-input": {
            color: "#333",
          },
          "& .MuiInputLabel-root": {
            color: "#333",
          },
        }}
      />
      <TextField
        label="Travel Type"
        variant="outlined"
        sx={{
          width: "250px",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#ffffff",
            },
            "&:hover fieldset": {
              borderColor: "#FF4081",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#FF4081",
            },
            backgroundColor: "#ffffff",
            borderRadius: "10px",
          },
          "& .MuiInputBase-input": {
            color: "#333",
          },
          "& .MuiInputLabel-root": {
            color: "#333",
          },
        }}
      />
      <Button
        variant="contained"
        sx={{
          height: "60px",
          borderRadius: "30px",
          backgroundColor: "#FF4081",
          color: "#fff",
          padding: "0 30px",
          fontSize: "1.2rem",
          "&:hover": {
            backgroundColor: "#F50057",
          },
        }}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
