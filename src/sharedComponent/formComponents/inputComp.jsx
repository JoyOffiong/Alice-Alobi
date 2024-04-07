import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

export default function InputBox({
  name,
  amount,
  label,
  className,
  type,
  errors,
  control,
  required,
  placeholder,
  onKeyUp,
  ref,
  disabled = false,
  defaultValue,
  size,
}) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          size={size || "small"}
          type={type}
          ref={ref}
          onKeyUp={onKeyUp}
          error={!!errors}
          className={className}
          helperText={errors?.message}
          variant="outlined"
          disabled={disabled}
          placeholder={placeholder}
          required={required}
          fullWidth
          //   onKeyUp={onKeyUp}
        />
      )}
    />
  );
}
