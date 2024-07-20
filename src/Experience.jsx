import { Suspense, useState, useEffect } from "react";
import {
  useGLTF,
  OrbitControls,
  Environment,
  Text,
  Clone,
  PresentationControls,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Physics, RigidBody } from "@react-three/rapier";
import Stage from "./components/models/stage/Stage.jsx";
import WeatherText from "./components/WeatherText.jsx";
import PostProcessingEffects from "./components/PostProcessingEffects.jsx";
import FallingWeatherIcons from "./components/FallingWeatherIcons.jsx";

export default function Experience(props) {
  /**
   * WEATHER DATA FROM TODAY TO 7 DAYS AFTER TODAY
   */
  const weatherDataToday = props.weather.current;
  const weatherDataDay01 = props.weather.daily[1];
  const weatherDataDay02 = props.weather.daily[2];
  const weatherDataDay03 = props.weather.daily[3];
  const weatherDataDay04 = props.weather.daily[4];
  const weatherDataDay05 = props.weather.daily[5];
  const weatherDataDay06 = props.weather.daily[6];
  const weatherDataDay07 = props.weather.daily[7];

  /**
   * ARRAY FOR POPULATE 7 DAYS 3D WEATHER ICONS
   */
  const [weatherIconsArray, setWeatherIconsArray] = useState([]);

  const weatherIconArrayData = {
    today: {
      key: "today",
      weatherDate: weatherDataToday,
      scale: 1.5,
      position: [10, 2, 6.5],
      rotation: [-Math.PI * 0.5, 0, 0],
    },
    day01: {
      key: "day01",
      weatherDate: weatherDataDay01,
      scale: 1.3,
      position: [-2.8, 2, 0.5],
      rotation: [-Math.PI * 0.5, 0, 0],
    },
    day02: {
      key: "day02",
      weatherDate: weatherDataDay02,
      scale: 1.3,
      position: [-0.117, 2, 0.5],
      rotation: [-Math.PI * 0.5, 0, 0],
    },
    day03: {
      key: "day03",
      weatherDate: weatherDataDay03,
      scale: 1.3,
      position: [2.566, 2, 0.5],
      rotation: [-Math.PI * 0.5, 0, 0],
    },
    day04: {
      key: "day04",
      weatherDate: weatherDataDay04,
      scale: 1.3,
      position: [5.249, 2, 0.5],
      rotation: [-Math.PI * 0.5, 0, 0],
    },
    day05: {
      key: "day05",
      weatherDate: weatherDataDay05,
      scale: 1.3,
      position: [7.931, 2, 0.5],
      rotation: [-Math.PI * 0.5, 0, 0],
    },
    day06: {
      key: "day06",
      weatherDate: weatherDataDay06,
      scale: 1.3,
      position: [10.615, 2, 0.5],
      rotation: [-Math.PI * 0.5, 0, 0],
    },
    day07: {
      key: "day07",
      weatherDate: weatherDataDay07,
      scale: 1.3,
      position: [13.3, 2, 0.5],
      rotation: [-Math.PI * 0.5, 0, 0],
    },
  };

  useEffect(() => {
    setWeatherIconsArray((prevWeatherIconArray) => {
      const newWeatherIconArray = [...prevWeatherIconArray];

      for (const data in weatherIconArrayData) {
        newWeatherIconArray.push(weatherIconArrayData[data]);
      }

      return newWeatherIconArray;
    });
  }, []);

  /**
   * Memo - log out - today - tomorrow
   */
  // let dateObjToday = new Date(props.weather.current.dt * 1000);
  // let utcStringToday = dateObjToday.toUTCString();

  // console.log(utcStringToday.slice(0, 3)); // 'Www' day of week
  // console.log(utcStringToday.slice(5, 7)); //  'dd' day of month
  // console.log(utcStringToday.slice(8, 11)); //  'Mmm' month
  // console.log(utcStringToday.slice(12, 16)); //  'yyyy' year

  // let dateObjTomorrow = new Date(props.weather.daily[1].dt * 1000);
  // let utcStringTomorrow = dateObjTomorrow.toUTCString();

  // console.log(utcStringTomorrow.slice(0, 3)); // 'Www' day of week
  // console.log(utcStringTomorrow.slice(5, 7)); //  'dd' day of month
  // console.log(utcStringTomorrow.slice(8, 11)); //  'Mmm' month
  // console.log(utcStringTomorrow.slice(12, 16)); //  'yyyy' year

  return (
    <>
      {/* DEBUG TOOLS */}
      {/* <Perf position="top-left" /> */}
      <OrbitControls makeDefault />
      {/* <axesHelper /> */}

      {/* ENVIRONMENT */}
      <Environment preset="apartment" />
      <directionalLight castShadow position={[1, 2, 3]} intensity={0.5} />
      <ambientLight intensity={0.5} />
      <color args={["white"]} attach="background" />

      {/* POSTPROCESSING */}
      {/* <PostProcessingEffects /> */}

      {/* <PresentationControls
        global
        polar={[0.0, 0.0]}
        azimuth={[-0.95, 1.2]}
        // config={{ mass: 2, tension: 400 }}
      > */}
      <Physics debug={true} gravity={[0, -3.5, 0]}>
        {/* STAGE */}
        <group rotation={[0, -Math.PI * 0.065, 0]}>
          <RigidBody type="fixed">
            <Stage />
          </RigidBody>
        </group>

        {/* FALLING WEAHTER ICONS */}
        {/* <FallingWeatherIcons weatherCondition={weatherCondition} /> */}

        {/* WEATHER ICON */}
        <group position={[-0.35, 0, 0]}>
          {weatherIconsArray.map((weatherIcon, index) => (
            <group key={index} name={index}>
              <DailyWeatherIcon
                weatherDate={weatherIcon.weatherDate}
                scale={weatherIcon.scale}
                position={weatherIcon.position}
                rotation={weatherIcon.rotation}
              />
            </group>
          ))}
        </group>

        {/* WEATHER TEXT */}
        {/* <Suspense>
          <WeatherText
            location={props.location}
            weather={weatherDataToday}
            color="#1C1C1C"
            scale={0.5}
            rotation={[-Math.PI * 0.5, 0, Math.PI * 0.065]}
            position={[0, 0, 0]}
          />
        </Suspense> */}
      </Physics>
      {/* </PresentationControls> */}
    </>
  );
}

function DailyWeatherIcon({ weatherDate, ...props }) {
  let weatherCondition;
  switch (weatherDate.weather[0].main) {
    case "Clear":
      weatherCondition = "clear";
      break;

    case "Clouds":
      weatherCondition = "clouds";
      break;

    case "Rain":
      weatherCondition = "rain";
      break;

    case "Drizzle":
      weatherCondition = "drizzle";
      break;

    case "Thunderstorm":
      weatherCondition = "thunderstorm";
      break;

    case "Snow":
      weatherCondition = "snow";
      break;

    case "Mist":
    case "Smoke":
    case "Haze":
    case "Dust":
    case "Fog":
    case "Sand":
    case "Ash":
    case "Squall":
    case "Tornado":
      weatherCondition = "mist";
      break;
  }

  const weatherIcon = useGLTF(
    `./models/weather-icons/${weatherCondition}-small.glb`
  );

  return (
    <>
      <RigidBody type="fixed">
        <group {...props}>
          <Clone
            object={weatherIcon.scene}
            scale={1.0}
            position={weatherCondition === "rain" ? [0.2, 0, 0] : [0, 0, 0]}
          />
        </group>
      </RigidBody>
    </>
  );
}

useGLTF.preload("./models/weather-icons/clear-small.glb");
useGLTF.preload("./models/weather-icons/clouds-small.glb");
useGLTF.preload("./models/weather-icons/rain-small.glb");
useGLTF.preload("./models/weather-icons/drizzle-small.glb");
useGLTF.preload("./models/weather-icons/thunderstorm-small.glb");
useGLTF.preload("./models/weather-icons/snow-small.glb");
useGLTF.preload("./models/weather-icons/mist-small.glb");
