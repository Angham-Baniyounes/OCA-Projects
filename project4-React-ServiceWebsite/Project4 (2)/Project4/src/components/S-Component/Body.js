import React, { Component } from "react";
import CardSettings from "./CardSettings";
import CoverProfile from "./CoverProfile";
import "../S-Style/Body.scss";
import "weather-icons/css/weather-icons.css";
import Weather from "./Weather/Weather";
import { getCardSettings } from "../../components/S-Component/DB";

const API_key = "c1207017687be6dc35b2e0178798c49e";
class Body extends Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      error: false,
    };
    this.getWeather();

    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog",
    };
  }

  calCelsius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
  }

  get_WeatherIcon(icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId <= 232:
        this.setState({ icon: this.weatherIcon.Thunderstorm });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: this.weatherIcon.Drizzle });
        break;
      case rangeId >= 500 && rangeId <= 531:
        this.setState({ icon: this.weatherIcon.Rain });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: this.weatherIcon.Snow });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: this.weatherIcon.Atmosphere });
        break;
      case rangeId === 800:
        this.setState({ icon: this.weatherIcon.Clear });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: this.weatherIcon.Clouds });
        break;
      default:
        this.setState({ icon: this.weatherIcon.Clouds });
    }
  }

  getWeather = async () => {
    try {
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${sessionStorage.getItem(
          "City"
        )}&appid=${API_key}`
      );
      const response = await api_call.json();
      console.log(response);
      if (response.main) {
        this.setState({
          city: response.name,
          // country: response.sys.country,
          celsius: this.calCelsius(response.main.temp),
          temp_max: this.calCelsius(response.main.temp_max),
          temp_min: this.calCelsius(response.main.temp_min),
          icon: this.weatherIcon.Thunderstorm,
        });
        this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);
      } else {
        console.error("city is unknown");
      }
    } catch (e) {
      console.error(e);
    }
  };
  render() {
    return (
      <div id="S-Container">
        <CoverProfile />

        <Weather
          city={this.state.city}
          country={this.state.country}
          temp_celsius={this.state.celsius}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          weatherIcon={this.state.icon}
        />

        <CardSettings CardSettings={getCardSettings()} />
      </div>
    );
  }
}

export default Body;
