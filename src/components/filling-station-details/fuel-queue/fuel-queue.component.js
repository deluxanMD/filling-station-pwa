import { Paper, Typography, LinearProgress } from "@mui/material";
import React from "react";

const FuelQueue = () => {
  return (
    <Paper
      elevation={3}
      style={{ zIndex: 9999, padding: 10, marginTop: 10, marginBottom: 15 }}
    >
      <Typography>Level of vehicle queue</Typography>
      <LinearProgress
        value={100}
        color={"success"}
        variant="determinate"
        style={{ marginTop: 10, marginBottom: 10, height: 10, borderRadius: 5 }}
      />
      <Typography color="error" paragraph={true} sx={{ fontSize: 12 }}>
        * Based on filling station update
      </Typography>
    </Paper>
  );
};

export default FuelQueue;
