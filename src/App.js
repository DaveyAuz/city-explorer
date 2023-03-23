import React from 'react';
import axios from 'axios';
require('dotenv').config()

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

      cityData: {}
        }
  }
  handleCityInput = (event) => {
    console.log(event)
    this.setState({
    city: event.target.value
     })
  }

  // ** async/await - handle our asynchronous code
  // ** try/catch - handle our errors - TRY resolve our successful promises & CATCH handle rejected promise

  getCityData = async (event) => {
    event.preventDefault();

    // try {
      // TODO: Use axios to get the data from LocationIQ - using city in state
        const API_KEY = 'your-api-key'; // Replace with your API key
        const url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=SEARCH_STRING&format=json`;
      console.log(url)
      let cityDataFromAxios = await axios.get(url);
      console.log(cityDataFromAxios.data[0])


      // TODO: Set State with the data that comes back from axios & set error boolean to false
      this.setState({
        cityData: cityDataFromAxios.data[0],
        error: false
        
      });

    // TODO: CALL WEATHER HANDLER
    let lat = cityDataFromAxios.data[0].lat;
    let lon = cityDataFromAxios.data[0].lon;

    this.handleGetWeather(lat, lon);
    
// TODO: Set state with the error boolean and the error message
  //   } catch (error) {
  //     this.setState({
  //       error: true,
  //       errorMessage: error.message
  //     })
  // }
  }

  handleGetWeather = async () => {
  try {
      //TODO: Call my server and in the lat, long and city name. 
      //local host weather URL
      let url = `${process.env.REACT_APP_SERVER}/weather?searchQuery=${this.state.city}&Format=json`;

      let weatherDataFromAxios = await axios.get(url);
      console.log(weatherDataFromAxios.data[0])
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message
      })
    }
  }

  // *** MAP PORTION OF YOUR LAB IMG SRC POINTS TO THIS URL: 
  // *** https://maps.locationiq.com/v3/staticmap?key=<YOUR API KEY>&center=<CITY'S LAT>,<CITY'S LON>&zoom=13

render(){ 
  return (
      <>
        <h1>MISTER PORTALS CITY EXPLORER</h1>

          <form onSubmit={this.getCityData}>
            <label > Enter in a City:
              <input type="text" onChange={this.handleCityInput} />
            </label>
            <button type="submit">Explore!</button>
          </form>

         { this.state.error
            ? <p>{this.state.errorMessage}</p>
            : <p>{this.state.cityData.display_name}</p>
  }
      </>
    )
  }
}
export default App;