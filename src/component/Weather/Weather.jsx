import React, { useState, useEffect } from "react";
import styles from "./Weather.module.css";
import { getWeatherDetails } from "../../apis/weather";
import { FaThermometerThreeQuarters } from "react-icons/fa";
import { FaWind } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";

const Weather = () => {
  const [date, setDate] = useState("");
  const [weather, setWeather] = useState(true);
  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    const result = await getWeatherDetails();
    setWeather(result.current);
    setDate(result.location.localtime);
  };
  return (
    <div className={styles.weatherCard}>
      <div className={styles.weatherCardHeader}>
        <span>{date}</span>
      </div>
      <div>
        {weather ? (
          <div className={styles.weatherCardBody}>
            <div className={styles.section1}>
              <img src={weather.condition?.icon} alt="weather condition icon" />
              <p>{weather?.condition?.text}</p>
            </div>
            <div className={styles.verticalBar}>|</div>
            <div className={styles.section2}>
              <p>{weather?.temp_c}&deg;C</p>
              <div className={styles.section2A}>
                <FaThermometerThreeQuarters />
                <div>
                  <p>{weather?.pressure_mb} mbar</p>
                  <p>Pressure</p>
                </div>
              </div>
            </div>
            <div className={styles.verticalBar}>|</div>
            <div className={styles.section3}>
              <div>
                <FaWind />
                <div>
                  <p>{weather?.wind_kph} km/h</p>
                  <p>wind</p>
                </div>
              </div>
              <div>
                <WiHumidity />
                <div>
                  <p>{weather?.humidity} %</p>
                  <p>Humidiy</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default Weather;
