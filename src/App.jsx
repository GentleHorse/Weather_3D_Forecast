import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import Backdrop from "./components/Backdrop.jsx";
import LoadingScene from "./components/LoadingScene.jsx";
import classes from "./App.module.css";
import Header from "./components/Header.jsx";

export default function App() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  function closewindowHandler() {
    setIsWindowOpen(true);
  }

  const apiKey = "7a11ff201910162a879e7aa32d259914";

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

  function goBackSearchBoxHandler() {
    setWeatherData(null);
    setLocation("");
    setIsWindowOpen(false);
    setIsLoaded(false);
  }

  function finishLoadingHandler() {
    setIsLoaded(true);
  }

  return (
    <>
      {!isWindowOpen && (
        <>
          {/* <Backdrop /> */}
          <div className={classes.home}>
            <div className={classes.searchBox}>
              <div className={classes.control}>
                <input
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                  placeholder="CITY NAME ?"
                  type="text"
                />
                <button onClick={getWeatherData}>Check weather</button>
              </div>
            </div>
            <div className={classes.heroArea}>
              <div className={classes.title}>
                <h1>7 Day</h1>
                <h1>Weather</h1>
                <h1>Forecast</h1>
              </div>
            </div>
          </div>
        </>
      )}

      {isWindowOpen && isLoaded && (
        <Header onGoBackSearch={goBackSearchBoxHandler} />
      )}

      {isWindowOpen && !isLoaded && (
        <Backdrop />
      )}

      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 32, 0],
        }}
      >
        {weatherData && (
          <Suspense
            fallback={<LoadingScene rotation={[-Math.PI * 0.4, 0, 0]} />}
          >
            <Experience
              onFinishLoading={finishLoadingHandler}
              location={location}
              weather={weatherData}
            />
          </Suspense>
        )}
      </Canvas>
    </>
  );
}
