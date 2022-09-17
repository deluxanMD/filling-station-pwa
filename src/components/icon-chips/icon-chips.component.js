import * as React from "react";
import Chip from "@mui/material/Chip";

const IconChips = ({ Icon, label, handleClick }) => {
  return (
    <Chip
      icon={<Icon />}
      label={label}
      size="medium"
      style={{
        color: "#000000",
        backgroundColor: "#ffffff",
        border: "1px solid #000000",
        zIndex: 9999,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 5,
      }}
      onClick={() => handleClick(label)}
    />
  );
};

export default IconChips;
