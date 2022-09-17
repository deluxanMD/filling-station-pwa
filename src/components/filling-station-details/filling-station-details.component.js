import React from "react";
import { Box, Divider, Paper, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FuelTypeSelect from "./fuel-type-select/fuel-type-select.component";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const FillingStationDetails = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: isMobile ? "100%" : 400,
        },
      }}
    >
      <Paper
        elevation={3}
        style={{ zIndex: 9999, position: "relative", padding: 10 }}
      >
        <Typography style={{ marginBottom: 10 }}>
          Filling Station Name
        </Typography>
        <CloseIcon style={{ position: "absolute", top: 10, right: 10 }} />
        <Divider />
        <FuelTypeSelect />
      </Paper>
    </Box>
  );
};

export default FillingStationDetails;
