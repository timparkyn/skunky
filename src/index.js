import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

document.addEventListener("DOMContentLoaded", () => {
  // getWeather();
});

class DisplayTable extends React.Component {
  constructor() {}

  render() {
    return (
      <div>
        <TitleBar />
        <LocationTable />
      </div>
    );
  }
}

class TitleBar extends React.Component {
  render() {
    return (
      <span>
        powfinder.<br />
        <br />
      </span>
    );
  }
}

class LocationTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Location />
        <WindObservations />
        <TextForecast />
        <IconForecast />
      </div>
    );
  }
}

class Location extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span>
        <b>{place.location}</b>&nbsp;&nbsp;&nbsp;{place.altitude}ft&nbsp;&nbsp;{
          place.temp_f
        }F&nbsp;&nbsp; {place.weather_obs}
      </span>
    );
  }
}

class WindObservations extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{place.windstring}</div>;
  }
}

class TextForecast extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{place.forecast}</div>;
  }
}

class IconForecast extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="content-box">
        <div class="day">{place.forecastDay}</div>
        <div class="icon">
          <img class="glyph" src={place.icon_url} />
          <span>{place.icon_desc}</span>
          <br />
          <span>{place.allday_snow}in</span>
        </div>
      </div>
    );
  }
}
