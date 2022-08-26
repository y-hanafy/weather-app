import {
  Accordion,
  AccordionItemHeading,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemButton,
  AccordionItemState,
} from "react-accessible-accordion";
import "./forecast.css";

const WEEK_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();

  let daysOfWeek = ["Today"];
  let daysOfMonth = [""]; 
  let forecastDays = [];

  for (let i = 1; i < 7; i++) {
    let date = new Date();
    date.setDate(date.getDate() + i);
    daysOfMonth.push(date.getDate());
    daysOfWeek.push(WEEK_DAYS[date.getDay()]);
  }
  
  for (let i = 0; i <= 30; i+=5) {
    forecastDays.push(data.list[i]);
  }

  return (
    <>
      <Accordion allowZeroExpanded allowMultipleExpanded>
        {forecastDays.map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <div className="daily-item-left">
                    <label className="day">
                      {daysOfWeek[idx]} {daysOfMonth[idx]}
                    </label>
                    <label className="min-max">
                      {Math.round(item.main.temp)}°F
                    </label>
                    <img
                      src={`icons/${item.weather[0].icon}.png`}
                      alt="weather"
                      className="icon-small"
                    />
                    <label className="description">
                      {item.weather[0].description.charAt(0).toUpperCase() +
                        item.weather[0].description.slice(1)}
                    </label>
                  </div>
                  <div className="daily-item-right">
                    <AccordionItemState>
                      {({ expanded }) => (
                        <img
                          src={
                            expanded
                              ? `icons/arrow-up.svg`
                              : `icons/arrow-down.svg`
                          }
                          alt="weather"
                          className="icon-arrow"
                        />
                      )}
                    </AccordionItemState>
                  </div>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label>Pressure</label>
                  <label>{item.main.pressure} hPa</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Humidity</label>
                  <label>{item.main.humidity}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Clouds</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Wind Speed</label>
                  <label>{item.wind.speed}m/s</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Sea Level</label>
                  <label>{item.main.sea_level}m</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Feels Like</label>
                  <label>{Math.round(item.main.feels_like)}°F</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
