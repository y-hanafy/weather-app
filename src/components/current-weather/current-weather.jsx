import "./current-weather.css";

const CurrentWeather = ({data}) => {

  const city = data.city
  const weatherDescription = (data.weather[0].description).charAt(0).toUpperCase() + (data.weather[0].description).slice(1)
  const icon = data.weather[0].icon
  const temp = Math.round(data.main.temp)
  const feelsLike = Math.round(data.main.feels_like)
  const wind = data.wind.speed
  const humidity = data.main.humidity
  const pressure = data.main.pressure

  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{city}</p>
          <p className="weather-description">{weatherDescription}</p>
        </div>
        <img alt="weather" className="weather-icon" src={`icons/${icon}.png`} />
      </div>
      <div className="bottom">
        <p className="temperature">{temp}°F</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label top">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels Like</span>
            <span className="parameter-value"> {feelsLike}°F</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value"> {wind} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value"> {pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
