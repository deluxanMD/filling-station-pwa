import React from "react";
import { Paper, Typography } from "@mui/material";
import Car from "../../../assets/images/sport-car.png";
import Bike from "../../../assets/images/bycicle.png";
import Auto from "../../../assets/images/tuktuk.png";

const FueledVehicles = () => {
  return (
    <Paper
      elevation={3}
      style={{ zIndex: 9999, padding: 10, marginTop: 10, paddingBottom: 2 }}
    >
      <Typography style={{ marginBottom: 10 }}>
        Fueled vehicles upto now
      </Typography>
      <Paper
        elevation={3}
        style={{
          padding: 10,
          marginBottom: 10,
          height: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img width="40" alt="Car" src={Car} />
        <Typography>250</Typography>
      </Paper>
      <Paper
        elevation={3}
        style={{
          padding: 10,
          marginBottom: 10,
          height: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img width="40" alt="Car" src={Auto} />
        <Typography>306</Typography>
      </Paper>
      <Paper
        elevation={3}
        style={{
          padding: 10,
          marginBottom: 10,
          height: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img width="40" alt="Car" src={Bike} />
        <Typography>350</Typography>
      </Paper>
      <Typography color="error" paragraph={true} sx={{ fontSize: 12 }}>
        * Note This results can be changed according to uncontrolled reasons.
      </Typography>
    </Paper>
  );
};

export default FueledVehicles;
