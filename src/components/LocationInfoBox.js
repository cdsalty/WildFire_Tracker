
const LocationInfoBox = ({ info }) => {
  return (
    <div className="location-info">
      <h2>WildFire Information</h2>
      <ul>
        <li>ID: <strong>{info.id}</strong></li>
        <li>Title: <strong>{info.title}</strong></li>
      </ul>
    </div>
  )
}

export default LocationInfoBox;