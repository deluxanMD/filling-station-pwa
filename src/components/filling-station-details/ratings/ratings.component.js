import { Box, Paper, Rating, Typography } from "@mui/material";
import React from "react";

const Ratings = () => {
  return (
    <Paper
      elevation={3}
      style={{ zIndex: 9999, padding: 10, marginTop: 10, marginBottom: 10 }}
    >
      <Typography variant="h5" style={{ marginBottom: 5 }}>
        Reviews
      </Typography>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography>4.5</Typography>
        <Rating value={3} style={{ marginLeft: 10, marginRight: 10 }} />
        <Typography>20 Reviews</Typography>
      </Box>
    </Paper>
  );
};

export default Ratings;
