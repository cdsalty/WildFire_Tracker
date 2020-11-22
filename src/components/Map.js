import GoogleMapReact from 'google-map-react';  // DOCS: https://www.npmjs.com/package/google-map-react
import LocationMarker from './LocationMarker';

const Map = ({ center, zoom }) => {


  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyD2nYGmQGRa_YM5ma1OdWlDGGnvTYBLXcE' }} // swap out for real api key for non-dev layout
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
