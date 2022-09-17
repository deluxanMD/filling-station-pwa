import React, { useState } from "react";
import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const FuelTypeSelect = () => {
  const [fuelType, setFuelType] = useState("");

  const handleChange = (event) => {
    setFuelType(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel>Fuel type</InputLabel>
        <Select value={fuelType} label="Fuel type" onChange={handleChange}>
          <MenuItem value={"Petrol 92"}>Petrol 92</MenuItem>
          <MenuItem value={"Petrol 93"}>Petrol 93</MenuItem>
          <MenuItem value={"Petrol 95"}>Petrol 95</MenuItem>
          <MenuItem value={"Diesel"}>Diesel</MenuItem>
          <MenuItem value={"Extra Mile"}>Extra Mile</MenuItem>
          <MenuItem value={"Super Diesel"}>Super Diesel</MenuItem>
          <MenuItem value={"Kerosene"}>Kerosene</MenuItem>
        </Select>
      </FormControl>
      <FavoriteBorderIcon style={{ fontSize: 36 }} />
    </Box>
  );
};

export default FuelTypeSelect;
