import React from "react";
import Donut from "react-donut";
import "./fuel-available.style.css";

const FuelAvailableChart = () => {
  return (
    <>
      <Donut
        chartData={[
          { name: "Remaining", data: 11550 },
          { name: "Used", data: 1650 },
        ]}
        chartWidth={300}
        chartHeight={500}
        showChartLabel={false}
        chartThemeConfig={{
          series: {
            colors: ["green", "red"],
          },
        }}
      />
    </>
  );
};

export default FuelAvailableChart;
