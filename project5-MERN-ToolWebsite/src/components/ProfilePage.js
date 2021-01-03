import React, { Component } from "react";
import ReactDOM from "react-dom";
import Orders from "./Orders";
import "./ProfilePage.css";
import OrdersPage from "./OrdersPage";
const key = "602d7d33ca42b5a47e216dd14db8d1f5";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?";
let usename = localStorage.getItem("username");
export default class ProfilePage extends Component {
  state = {
    locationName: "",
    temp: 0,
    icon: "",
    backgroundImage: "",
    name: "",
    email: "",
  };

  componentWillMount() {
    this.setState({
      name: sessionStorage.getItem("name"),
      email: sessionStorage.getItem("email"),
    });
  }
  componentDidMount() {
    fetch(`${apiURL}q=Amman&appid=${key}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          isLoading: false,
          locationName: data.name,
          temp: data.main.temp,
          icon: data.weather[0].icon,
        });
      })
      .then(() => {
        this.setbackgroundImage();
      })
      .catch((err) => {
        console.log("Error Reading data " + err);
      });
  }

  getLocationWeather() {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      fetch(`${apiURL}lat=${lat}&lon=${lon}&appid=${key}`)
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            isLoading: false,
            locationName: data.name,
            temp: data.main.temp,
            icon: data.weather[0].icon,
          });
        })
        .then(() => {
          this.setbackgroundImage();
        })
        .catch((err) => {
          console.log("Error Reading data " + err);
        });
    });
  }
  setbackgroundImage = () => {
    if (this.state.icon === "01d") {
      this.setState({
        backgroundImage:
          "https://s7d2.scene7.com/is/image/TWCNews/img_3214_jpg-1",
      });
    } else if (this.state.icon === "01n") {
      this.setState({
        backgroundImage:
          "https://ak.picdn.net/shutterstock/videos/1006790422/thumb/1.jpg",
      });
    } else if (this.state.icon === "02d") {
      this.setState({
        backgroundImage:
          "https://s7d2.scene7.com/is/image/TWCNews/1031_nc_partly_cloudy_3",
      });
    } else if (this.state.icon === "02n") {
      this.setState({
        backgroundImage:
          "https://www.drahtphotography.com/wp-content/uploads/2015/05/sampleIMG_3642.jpg",
      });
    } else if (this.state.icon === "03d") {
      this.setState({
        backgroundImage:
          "https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/cloud/altocumulus.jpg",
      });
    } else if (this.state.icon === "03n") {
      this.setState({
        backgroundImage:
          "https://live.staticflickr.com/5758/22448249491_e3e9ddcddf_b.jpg",
      });
    } else if (this.state.icon === "04d") {
      this.setState({
        backgroundImage:
          "https://www.sgsweather.com/Images/Glossary1/Fractus%20clouds.jpg",
      });
    } else if (this.state.icon === "04n") {
      this.setState({
        backgroundImage:
          "https://www.storytrender.com/wp-content/uploads/2017/12/0_CATERS_COLD_MOON_1-768x512.jpg",
      });
    } else if (this.state.icon === "09d") {
      this.setState({
        backgroundImage:
          "https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/rain/leaves-and-rain.jpg",
      });
    } else if (this.state.icon === "09n") {
      this.setState({
        backgroundImage: "https://i.ytimg.com/vi/q76bMs-NwRk/maxresdefault.jpg",
      });
    } else if (this.state.icon === "10d") {
      this.setState({
        backgroundImage:
          "https://www.vmcdn.ca/f/files/via/images/rainfall-umbrella.jpg;w=960",
      });
    } else if (this.state.icon === "10n") {
      this.setState({
        backgroundImage: "https://wallpapercave.com/wp/wp2787865.jpg",
      });
    } else if (this.state.icon === "11d") {
      this.setState({
        backgroundImage:
          "https://www.stormgeo.com/assets/ArticleImages/thunderstorm-flipped__FocusFillWzQyODgsMjcwMCwieSIsNzRd.jpg",
      });
    } else if (this.state.icon === "11n") {
      this.setState({
        backgroundImage:
          "https://www.geico.com/living/wp-content/uploads/geico-more-Thunderstorms-post-2016.jpg",
      });
    } else if (this.state.icon === "13d") {
      this.setState({
        backgroundImage:
          "https://www.vmcdn.ca/f/files/via/images/snow-falling-forest.jpg;w=960",
      });
    } else if (this.state.icon === "13n") {
      this.setState({
        backgroundImage: "https://wallpaperaccess.com/full/1125350.jpg",
      });
    } else if (this.state.icon === "50d") {
      this.setState({
        backgroundImage:
          "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/r9E0QYuleiv25jmq9/6-in-1-video-the-slow-moving-stream-of-cars-on-the-road-during-heavy-fog-foggy-weather-real-time-capture_huefcmcxe_thumbnail-1080_01.png",
      });
    } else {
      this.setState({
        backgroundImage:
          "https://c.ndtvimg.com/2019-12/slrm4o78_delhi-fog_625x300_30_December_19.jpg",
      });
    }
  };

  render() {
    document.title = "BURGER TAGS | Profile Page";
    // document.getElementsByTagName('META')[4].content =
    //     'this is the profile page for users to check there orders and they can check the weather based on there location';

    let iconurl = "http://openweathermap.org/img/w/" + this.state.icon + ".png";
    let temp = Math.round(this.state.temp - 273.15);
    let backgroundURL = this.state.backgroundImage
      ? this.state.backgroundImage
      : "https://images.radio.com/aiu-media/gettyimages-1036404942-d63ba65d-c9cb-407d-83ea-ce3fd34ad0af.jpg?width=800";

    return (
      <main className="Profile">
        <div
          className="weatherAndlocation-container"
          style={{ backgroundImage: `url(${backgroundURL})` }}
        >
          <div className="weather-container">
            <div className="background-container">
              <h1>{this.state.locationName}</h1>
              <div className="flex-c">
                <h2>{temp} °C</h2>
                <img src={iconurl} alt="weather icon" />
              </div>
            </div>
          </div>
          {/* <i
                onClick={() => {
                    this.getLocationWeather();
                }}
                className='fas fa-map-marker-alt'
                ></i> */}
        </div>
        <div className="img-container">
          <div className="img">{/* <i class='fas fa-pen'></i> */}</div>
        </div>
        <div className="info-container">
          <p className="Profile-name">{usename}</p>
          <p className="email">{this.state.email}</p>
        </div>
        {/* <Services /> */}
        <OrdersPage />
      </main>
    );
  }
}
