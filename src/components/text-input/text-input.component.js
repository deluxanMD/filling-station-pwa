import { TextField } from "@mui/material";
import React from "react";

const TextInput = ({ label, value, handleChange }) => {
  return (
    <TextField
      fullWidth
      label={label}
      size="small"
      style={{ backgroundColor: "#ffffff", border: 0 }}
      onChange={handleChange}
      value={value}
    />
  );
};

export default TextInput;
