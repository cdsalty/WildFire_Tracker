import GoogleMapReact from 'google-map-react';  // DOCS: https://www.npmjs.com/package/google-map-react

const Map = ({ center, zoom }) => {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API_KEY }} // swap out for real api key for non-dev layout
        defaultCenter={center}
        defaultZoom={zoom}
      >

      </GoogleMapReact>
    </div>
  )
}
// Defining the default
Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756
  },
  zoom: 6
}
export default Map;
