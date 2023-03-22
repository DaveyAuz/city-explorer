import React from 'react';
import Axios from 'axios';
 
return fetch(url)
    .then(response => response.json())
    .then(data => {
      // The LocationIQ API returns the location details in the 'address' object.
      const { address } = data;
      return {
        city: address.city,
        country: address.country,
        state: address.state,
        zip: address.postcode,
        latitude: data.lat,
        longitude: data.lon
      };
    });
  

  handleCityInput = (event) => {
    this.setState({
      city: event.target.value
    })
  }

  // ** async/await - handle our asynchronous code
  // ** try/catch - handle our errors - TRY resolve our successful promises & CATCH handle rejected promise

  getCityData = async (event) => {
    event.preventDefault();

    try {
      // TODO: Use axios to get the data from LocationIQ - using city in state
    

function getLocationIQ(latitude, longitude) {
  const API_KEY = 'your-api-key'; // Replace with your API key
  const url = `https://us1.locationiq.com/v1/search?key=YOUR_ACCESS_TOKEN&q=SEARCH_STRING&format=json${process.env.REACT_APP_LOCATION_IQ_API_KEY}&lat=${latitude}&lon=${longitude}&format=json`;
}
let cityDataFromAxios = await axios.get(url);
console.log(cityDataFromAxios.data[0])


      // TODO: Set State with the data that comes back from axios & set error boolean to false
      this.setState({
        cityData: cityDataFromAxios.data[0],
        error: false
      });

    } catch (error) {

      // TODO: Set state with the error boolean and the error message
      this.setState({
        error: true,
        errorMessage: error.message
      })
    }

  }

  // *** MAP PORTION OF YOUR LAB IMG SRC POINTS TO THIS URL: 
  // *** https://maps.locationiq.com/v3/staticmap?key=<YOUR API KEY>&center=<CITY'S LAT>,<CITY'S LON>&zoom=13

  render() {
    return (
      <>
        <h1>API CALLS</h1>
        function App() {
  const [location, setLocation] = React.useState(null);

  React.useEffect(() ={'>'} {
    // Example usage of the getLocationIQ function
    getLocationIQ(-17.657420175761903, 177.26633949892576).then(locationData => {
      setLocation(locationData);
    })};
  , []);

        <form onSubmit={this.getCityData}>
          <label > Enter in a City:
            <input type="text" onChange={this.handleCityInput} />
          </label>
          <button type="submit">Explore!</button>
        </form>

        {/* TERNARY - WTF  */}
        {
          this.state.error
            ? <p>{this.state.errorMessage}</p>
            : <p>{this.state.cityData.display_name}</p>
        }
        <div>
      {location && (
        <div>
          <h2>Location Details</h2>
          <p>City: {location.city}</p>
          <p>Country: {location.country}</p>
          <p>State: {location.state}</p>
          <p>Zip: {location.zip}</p>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      )}
    </div>


      </>
    )
  }
}

export default App;