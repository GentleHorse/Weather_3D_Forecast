import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import Backdrop from "./components/Backdrop.jsx";
import LoadingScene from "./components/LoadingScene.jsx";
import classes from "./App.module.css";

export default function App() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [isWindowOpen, setIsWindowOpen] = useState(false);

  function closewindowHandler() {
    setIsWindowOpen(true);
  }

  const apiKey = "7a11ff201910162a879e7aa32d259914";

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  async function getGeocoding() {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${apiKey}`
    );
    const data = await response.json();

    if (
      !response.ok ||
      data[0].lat === undefined ||
      data[0].lon === undefined
    ) {
      alert("Please enter a valid city name");
      setLocation("");

      return;
    }

    return data;
  }

  async function getWeatherData() {
    try {
      const geoData = await getGeocoding();
      const response = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${geoData[0].lat}&lon=${geoData[0].lon}&appid=${apiKey}&units=metric`
      );

      const data = await response.json();

      if (response.ok && data) {
        setWeatherData(data);
        closewindowHandler();
      }

      if (!response.ok) {
        alert("Please enter a valid city name");
        setLocation("");
      }
    } catch (error) {
      alert("Please enter a valid city name");
      setLocation("");
    }
  }

  return (
    <>
      {!isWindowOpen && (
        <>
          <Backdrop />
          <div className={classes.searchBox}>
            <div className={classes.control}>
              <h1>7 DAYS WEATHER FORECAST</h1>
              <p>Which city do you want to check?</p>
              <input
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                placeholder="CITY NAME ?"
                type="text"
              />
              <button onClick={getWeatherData}>Check weather</button>
            </div>
          </div>
        </>
      )}

      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 30, 8],
        }}
      >
        {weatherData && (
          <Suspense
            fallback={<LoadingScene rotation={[-Math.PI * 0.5, 0, 0]} />}
          >
            <Experience location={location} weather={weatherData} />
          </Suspense>
        )}
      </Canvas>
    </>
  );
}
