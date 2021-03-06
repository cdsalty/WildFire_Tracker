import { useState, useEffect } from 'react';
import Map from './components/Map';
import Loader from './components/Loader';
import Header from './components/Header';


const App = () => {

  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      // const days = '?days=20'; https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?days=20
      // const response = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events');
      const response = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?days=20');
      const { events } = await response.json(); // I specifically need the events array... 
      // console.log(events)
      setEventData(events);
      // console.log(eventData);
      setLoading(false);
    }
    fetchEvents();
    // eslint-disable-next-line
  }, []); // only needs to get the data on inital load



  return (
    <div>
      <Header />
      {!loading ? <Map eventData={eventData} /> : <Loader />}
    </div>
  )
}
export default App;




// https://eonet.sci.gsfc.nasa.gov/api/v2.1/events
