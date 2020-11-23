import { useState, useEffect } from 'react';
import Map from './components/Map';
import Loader from './components/Loader';


const App = () => {

  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const response = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events');
      const { events } = await response.json();
      // console.log(events)
      setEventData(events);
      // console.log(eventData);
      setLoading(false);
    }
    fetchEvents();
    console.log(eventData);
  }, []); // only needs to get the data on inital load



  return (
    <div>
      {!loading ? <Map eventData={eventData} /> : <Loader />}
    </div>
  )
}
export default App;




// https://eonet.sci.gsfc.nasa.gov/api/v2.1/events
