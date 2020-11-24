import GoogleMapReact from 'google-map-react';  // DOCS: https://www.npmjs.com/package/google-map-react
import LocationMarker from './LocationMarker';

const Map = ({ eventData, center, zoom }) => {
  // console.log(process.env)

  const markers = eventData.map((evtData) => {
    if (evtData.categories[0].id === 8) {
      return <LocationMarker lat={evtData.geometries[0].coordinates[1]} lng={evtData.geometries[0].coordinates[0]} />
    }
    return null;
  })

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {/* <LocationMarker lat={center.lat} lng={center.lng} /> REPLACED WITH 'MARKERS'*/}
        {markers}
      </GoogleMapReact>
    </div>
  )
}

// Defining default location
Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756
  },
  zoom: 6
}
export default Map;


