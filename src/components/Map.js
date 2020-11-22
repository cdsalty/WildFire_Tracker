import GoogleMapReact from 'google-map-react';  // DOCS: https://www.npmjs.com/package/google-map-react
import LocationMarker from './LocationMarker';

const Map = ({ center, zoom }) => {

  // console.log(process.env)

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }} // swap out for real api key for non-dev layout
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <LocationMarker lat={center.lat} lng={center.lng} />
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
  zoom: 7
}
export default Map;
