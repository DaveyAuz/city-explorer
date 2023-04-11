import React from "react";
import axios from "axios";
import Image from 'react-bootstrap/Image';
import Weather from './Weather'
import Movie from './Movie.js'
import Container from 'react-bootstrap/Container';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      city: '',
      location: '',
      longitude: '',
      latitude: '',
      weatherData: []


    }
  }
  handleCityInput = (event) => {
    //console.log(event.target.value)
    this.setState({
      city: event.target.value
    })
  }

  // ** async/await - handle our asynchronous code
  // ** try/catch - handle our errors - TRY resolve our successful promises & CATCH handle rejected promise

  getCityData = async (event) => {
    event.preventDefault();

    const url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`;
    //console.log(url)
    try {
      // TODO: Use axios to get the data from LocationIQ - using city in state
      let cityDataFromAxios = await axios.get(url);
      //console.log(cityDataFromAxios.data[0])

      // TODO: Set State with the data that comes back from axios & set error boolean to false
      this.setState({
        location: cityDataFromAxios.data[0].display_name,
        longitude: cityDataFromAxios.data[0].lon,
        latitude: cityDataFromAxios.data[0].lat,
        error: false
      });
      //console.log(this.state.location);

      // TODO: CALL WEATHER HANDLER
      let lat = cityDataFromAxios.data[0].lat;
      let lon = cityDataFromAxios.data[0].lon;
      //console.log(lat, lon);
      this.handleGetWeather(lat, lon);

      // TODO: Set state with the error boolean and the error message
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message
      })
    }
  }

  handleGetWeather = async (lat, lon) => {
    try {
      //console.log(`${process.env.REACT_APP_SERVER}/weather?lat=${lat}&lon=${lon}`)
      //TODO: Call my server and in the lat, long and city name. 
      //local host weather URL
      const weatherDataFromAxios = await axios.get(`${process.env.REACT_APP_SERVER}/weather?lat=${lat}&lon=${lon}`);
      //console.log(weatherDataFromAxios);
      this.setState({
        weatherData: weatherDataFromAxios.data
      })
      //console.log(weatherDataFromAxios.data.data)
      let movieResultsfromAxios = await axios.get(`${process.env.REACT_APP_SERVER}/movies?title=${this.state.city}`);
      console.log(movieResultsfromAxios);
      // Todo: Set state with the data that comes back from axios
      this.setState({
        // cityData: cityDatafromAxios.data[0],
        //weatherData: weatherDatafromAxios.data,
        error: false,
        showMap: true,
        movieData: movieResultsfromAxios.data,

      });


    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message
      })
    }
  }

  // getPhotos = async () => {

  //   try {
  //     let results = await axios.get(`${process.env.REACT_APP_SERVER}/photos?searchQuery=${this.state.city}`)
  //     this.setState({
  //       photoData: results.data,
  //       showImages: true,
  //       photoError: false,
  //       photoErrorMessage: ''
  //     })
  //   } catch (error) {
  //     this.setState({
  //       photoError: true,
  //       showImages: false,
  //       photoErrorMessage: `A Photo Error Occurred: ${error.response.status}, ${error.response.data}`

  //     })
  //   }
  // }


  render() {
    //console.log(this.state);
    return (
      <Container>

        <h1>City Explorer</h1>

        <form onSubmit={this.getCityData}>
          <label> Enter in a City:
            <input placeholder='Enter City Name' type="text" onChange={this.handleCityInput} value={this.state.city}/>
          </label>
          <button type="submit" variant="primary">Explore!</button>
        </form>
        {/*TERNARY - WTF */}
        {this.state.error ? <p>{this.state.errorMessage}</p>
          : <p>{this.state.city}</p>}
        {this.state.showMap && <Image class="img-fluid" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.latitude},${this.state.longitude}&zoom=13`} alt='City map for location selected' />}
        <p>{this.state.longitude}</p>
        <p>{this.state.latitude}</p>

        {this.state.weatherData && (
          this.state.weatherData.map(weather => (<Weather weatherData={weather} />)
        ))};

        {this.state.movieData && (
        this.state.movieData.map(movieData => (<Movie movieData={movieData} />)
        ))};
      </Container>
    )
  }
}

export default App;





