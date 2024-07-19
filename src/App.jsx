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

  async function getWeatherData() {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (response.ok && data) {
      setWeatherData(data);
      closewindowHandler();
    }

    if (!response.ok) {
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
              <h1>3D WEATHER APP</h1>
              <p>Which city do you want to check for the current weather?</p>
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
          position: [4, 2.5, 18],
        }}
      >
        {weatherData && (
          <Suspense fallback={<LoadingScene />}>
            <Experience location={location} weather={weatherData} />
          </Suspense>
        )}
      </Canvas>
    </>
  );
}
