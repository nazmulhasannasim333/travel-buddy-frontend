import { SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TTBInputProps = {
  margin?: "normal" | "dense" | "none";
  name: string;
  label?: string;
  type?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  sx?: SxProps;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
  autoFocus?: boolean;
};

const TBInput = ({
  name,
  label,
  margin = "dense",
  type = "text",
  size = "small",
  fullWidth = true,
  sx,
  placeholder,
  required,
  autoComplete,
  autoFocus,
}: TTBInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          type={type}
          variant="outlined"
          size={size}
          fullWidth={fullWidth}
          sx={sx}
          placeholder={placeholder}
          required={required}
          margin={margin}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          error={!!error?.message}
          helperText={error?.message}
        />
      )}
    />
  );
};

export default TBInput;
