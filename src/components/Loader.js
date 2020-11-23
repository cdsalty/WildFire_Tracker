import spinner from './spinner.gif';

const Loader = () => {
  return (
    <div className="loader">
      <img src={spinner} alt="Loading" />
      <h2>Retrieving your data...</h2>
    </div>
  )
}

export default Loader;
