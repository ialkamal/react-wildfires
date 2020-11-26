import Map from "./components/Map";
import { useState, useEffect } from "react";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch("https://eonet.sci.gsfc.nasa.gov/api/v3/events");
      const { events } = await res.json();
      setEventData(events);
      setLoading(false);
    };

    fetchEvents();
  }, []);

  return (
    <div className="app">
      {!loading ? (
        <Map eventData={eventData} />
      ) : (
        <iframe
          title="Loader"
          src="https://giphy.com/embed/feN0YJbVs0fwA"
          width="200"
          height="200"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}

export default App;
