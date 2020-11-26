import { useState } from "react";
import GoogleMapReact from "google-map-react";
import PropTypes from "prop-types";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";

function Map({ eventData, center, zoom }) {
  const [locationInfo, setLocationInfo] = useState(null);
  return (
    <div className="map">
      {locationInfo && <LocationInfoBox info={locationInfo} />}
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBydI46W5q-pzKPI0OFNZWzT3LPlRT-5MM" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {eventData.map((event) => {
          if (event.categories[0].title === "Wildfires")
            return (
              <LocationMarker
                key={event.id}
                lat={event.geometry[0].coordinates[1]}
                lng={event.geometry[0].coordinates[0]}
                onClick={() =>
                  setLocationInfo({ id: event.id, title: event.title })
                }
              />
            );
          return null;
        })}
      </GoogleMapReact>
    </div>
  );
}

Map.propTypes = {
  center: PropTypes.object,
  zoom: PropTypes.number,
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
};

export default Map;
