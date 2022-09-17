import React from "react";
import IconChips from "../../components/icon-chips/icon-chips.component";
import Stack from "@mui/material/Stack";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const FuelTypeTabs = ({ handleFuelSelection }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack
      direction="row"
      spaciing={1}
      style={{ width: "100%", overflow: "auto", marginTop: isMobile ? 8 : 0 }}
    >
      <IconChips
        Icon={LocalGasStationIcon}
        label="Petrol 92"
        handleClick={handleFuelSelection}
      />
      <IconChips
        Icon={LocalGasStationIcon}
        label="Petrol 93"
        handleClick={handleFuelSelection}
      />
      <IconChips
        Icon={LocalGasStationIcon}
        label="Petrol 95"
        handleClick={handleFuelSelection}
      />
      <IconChips
        Icon={LocalGasStationIcon}
        label="Diesel"
        handleClick={handleFuelSelection}
      />
      <IconChips
        Icon={LocalGasStationIcon}
        label="Extra Mile"
        handleClick={handleFuelSelection}
      />
      <IconChips
        Icon={LocalGasStationIcon}
        label="Super Diesel"
        handleClick={handleFuelSelection}
      />
      <IconChips
        Icon={LocalGasStationIcon}
        label="Kerosene"
        handleClick={handleFuelSelection}
      />
    </Stack>
  );
};

export default FuelTypeTabs;
