import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { getPlaces } from "./getPlaces.js";

export const Search = (props) => {
  const [searchText, setSearchText] = useState("");
  const [latitude, setLat] = useState(0);
  const [longitude, setLong] = useState(0);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
    } else {
      alert("Please enable location services in your browser");
    }
  };

  getLocation();

  return (
    <form>
      <TextField
        id="location-search"
        label="Where to?"
        onChange={(event) => setSearchText(event.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => getPlaces(latitude, longitude, searchText)}
      >
        search
      </Button>
    </form>
  );
};

export default Search;