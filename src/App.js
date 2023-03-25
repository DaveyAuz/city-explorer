import React from 'react';
import axios from 'axios';
import Map from './Map';
import SearchForm from './components/SearchForm';
//import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import CityData from './components/CityData';
import ErrorAlert from './components/ErrorAlert';

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
    console.log(event)
    this.setState({
    city: event.target.value
    })
  }

  // ** async/await - handle our asynchronous code
  // ** try/catch - handle our errors - TRY resolve our successful promises & CATCH handle rejected promise

  getCityData = async (event) => {
    event.preventDefault();

    const url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`;
  console.log(url)
    try {
      // TODO: Use axios to get the data from LocationIQ - using city in state
      let cityDataFromAxios = await axios.get(url);
      console.log(cityDataFromAxios.data[0])

      // TODO: Set State with the data that comes back from axios & set error boolean to false
      this.setState({
        location: cityDataFromAxios.data[0].display_name,
        longitude: cityDataFromAxios.data[0].lon,
        latitude: cityDataFromAxios.data[0].lat,
        error: false
      });
      console.log(this.state.location);

    // TODO: CALL WEATHER HANDLER
    let lat = cityDataFromAxios.data[0].lat;
    let lon = cityDataFromAxios.data[0].lon;
      console.log(lat, lon);
    //this.handleGetWeather(lat, lon);
    
    // TODO: Set state with the error boolean and the error message
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message
      })
  }
}

  handleGetWeather = async () => {
  try {
      //TODO: Call my server and in the lat, long and city name. 
      //local host weather URL
      const weatherDataFromAxios = await axios.get(`${process.env.REACT_APP_SERVER}/weather`, {params: {lat: this.state.latitude, lon: this.state.longitude} } );
      this.setState({
        weatherData: weatherDataFromAxios.data})

      console.log(weatherDataFromAxios.data[0])
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message
      })
    }
  }

  getPhotos = async () => {

    try {
      let results = await axios.get(`${process.env.REACT_APP_SERVER}/photos?searchQuery=${this.state.city}`)
      this.setState({
        photoData: results.data,
        showImages: true,
        photoError: false,
        photoErrorMessage: ''
      })
    } catch (error) {
      this.setState({
        photoError: true,
        showImages: false,
        photoErrorMessage: `A Photo Error Occurred: ${error.response.status}, ${error.response.data}`

      })
    }
  }


  render() {
    return (
      <>
        <Container>
          <h1>API CALLS</h1>
        </Container>
          <SearchForm
            getCityInfo={this.getCityData}
            handleCityInput={this.handleCityInput}
          /> ,
        </>
      ){
            this.state.error
              ? <ErrorAlert errorMessage={this.state.errorMessage} />
              : Object.keys(this.state.cityData).length > 0 && <CityData
              <>
              <p>{this.state.location}</p>
              <p>{this.state.latitude}</p>
              <p>{this.state.longitude}</p>
              </>
          }
        <Map img_url={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.latitude},${this.state.longitude}&size=${window.innerWidth}x300&format=jpg&zoom=15`}
                    city={this.state.location}/>
        </>
              />{
          }
        </Container>

        {
          this.state.showImages &&
          <>
            <Container>
              <Carousel>
                {this.state.photoData.map((pic, idx) => (
                  <Carousel.Item key={idx}>
                    <img
                      className="d-block w-100"
                      src={pic.src}
                      alt={pic.alt}
                    />
                    <Carousel.Caption>
                      <h3 style={{ backgroundColor: 'teal', borderRadius: '5px', width: 'max-content', margin: 'auto', padding: '5px' }}>Photo by: {pic.username}</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Container>
          </>
        }
      </>
}
}

export default App;





