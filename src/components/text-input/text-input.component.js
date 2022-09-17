import React from "react";
import { TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const TextInput = ({ label, value, handleChange }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <TextField
      label={label}
      size="small"
      style={{
        backgroundColor: "#ffffff",
        border: 0,
        width: isMobile ? "100%" : "35%",
      }}
      onChange={handleChange}
      value={value}
    />
  );
};

export default TextInput;
