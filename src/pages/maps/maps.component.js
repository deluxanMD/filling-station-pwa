import React, { useState, useCallback, memo, useEffect } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import TextInput from "../../components/text-input/text-input.component";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import FuelTypeTabs from "../../components/fuel-type-tabs/fuel-type-tabs.component";
import FillingStationDetails from "../../components/filling-station-details/filling-station-details.component";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const Maps = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAleQtbIgfBnoOY5m-7qRP7sfAcP1aA2oE",
  });

  const [map, setMap] = useState(null);
  const [center, setCenter] = useState({});
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedFuel, setSelectedFuel] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const onLoad = useCallback(
    function callback(map) {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
      setMap(map);
    },
    [center]
  );

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const getLatLon = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const handleChange = (e) => {
    const {
      target: { value },
    } = e;
    setSearchKeyword(value);
  };

  const handleFuelSelection = (type) => {
    setSelectedFuel(type);
  };

  useEffect(() => {
    getLatLon();
  }, [map]);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={14}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: 8,
          paddingLeft: 1,
          paddingRight: 1,
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <TextInput
          label="search by fuel station name, id or location"
          handleChange={handleChange}
          value={searchKeyword}
        />
        <FuelTypeTabs handleFuelSelection={handleFuelSelection} />
      </Box>
      <FillingStationDetails />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default memo(Maps);
