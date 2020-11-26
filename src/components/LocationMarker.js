import React from "react";
import { Icon } from "@iconify/react";
import LocationIcon from "@iconify/icons-mdi/fire-alert";

const LocationMarker = ({ onClick }) => {
  //   const handleClick = () => {
  //     console.group("WildFire");
  //     console.log("Title: ", title);
  //     console.log("Lat: ", lat);
  //     console.log("Lng: ", lng);
  //     console.groupEnd();
  //   };

  return (
    <div className="location-marker" onClick={onClick}>
      <Icon icon={LocationIcon} className="location-icon" />
    </div>
  );
};

export default LocationMarker;
