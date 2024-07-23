import { Suspense, useState, useEffect } from "react";
import {
  useGLTF,
  OrbitControls,
  Environment,
  Text,
  Text3D,
  Center,
  Clone,
  PresentationControls,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Physics, RigidBody } from "@react-three/rapier";
import Stage from "./components/models/stage/Stage.jsx";
import FallingWeatherIcons from "./components/FallingWeatherIcons.jsx";
import PostProcessingEffects from "./components/PostProcessingEffects.jsx";

const WEATHER_ICON_ROTATION = [-Math.PI * 0.5, 0, 0];
const WEATHER_ICON_POSITION_Y = 2.0;
const WEATHER_ICON_POSITION_Z = 1.2;

export default function Experience(props) {
  /**
   * SEND LOADED SIGNAL
   */
  useEffect(() => {
    props.onFinishLoading();
  }, []);

  /**
   * WEATHER DATA FROM TODAY TO 7 DAYS AFTER TODAY
   */
  const weekWeather = {
    today: {
      data: props.weather.current,
      utcStringdate: new Date(props.weather.current.dt * 1000).toUTCString(),
    },
    day01: {
      data: props.weather.daily[0],
      utcStringdate: new Date(props.weather.daily[0].dt * 1000).toUTCString(),
    },
    day02: {
      data: props.weather.daily[1],
      utcStringdate: new Date(props.weather.daily[1].dt * 1000).toUTCString(),
    },
    day03: {
      data: props.weather.daily[2],
      utcStringdate: new Date(props.weather.daily[2].dt * 1000).toUTCString(),
    },
    day04: {
      data: props.weather.daily[3],
      utcStringdate: new Date(props.weather.daily[3].dt * 1000).toUTCString(),
    },
    day05: {
      data: props.weather.daily[4],
      utcStringdate: new Date(props.weather.daily[4].dt * 1000).toUTCString(),
    },
    day06: {
      data: props.weather.daily[5],
      utcStringdate: new Date(props.weather.daily[5].dt * 1000).toUTCString(),
    },
    day07: {
      data: props.weather.daily[6],
      utcStringdate: new Date(props.weather.daily[6].dt * 1000).toUTCString(),
    },
  };

  /**
   * ARRAY FOR POPULATE 7 DAYS 3D WEATHER ICONS
   */
  const [weatherIconsArray, setWeatherIconsArray] = useState([]);

  const weatherIconArrayData = {
    today: {
      key: "today",
      weatherDate: weekWeather.today.data,
      scale: 1.5,
      position: [12.7, WEATHER_ICON_POSITION_Y, 6.5],
      rotation: WEATHER_ICON_ROTATION,
    },
    day01: {
      key: "day01",
      weatherDate: weekWeather.day01.data,
      scale: 1.3,
      position: [-2.8, WEATHER_ICON_POSITION_Y, WEATHER_ICON_POSITION_Z],
      rotation: WEATHER_ICON_ROTATION,
    },
    day02: {
      key: "day02",
      weatherDate: weekWeather.day02.data,
      scale: 1.3,
      position: [-0.117, WEATHER_ICON_POSITION_Y, WEATHER_ICON_POSITION_Z],
      rotation: WEATHER_ICON_ROTATION,
    },
    day03: {
      key: "day03",
      weatherDate: weekWeather.day03.data,
      scale: 1.3,
      position: [2.566, WEATHER_ICON_POSITION_Y, WEATHER_ICON_POSITION_Z],
      rotation: WEATHER_ICON_ROTATION,
    },
    day04: {
      key: "day04",
      weatherDate: weekWeather.day04.data,
      scale: 1.3,
      position: [5.249, WEATHER_ICON_POSITION_Y, WEATHER_ICON_POSITION_Z],
      rotation: WEATHER_ICON_ROTATION,
    },
    day05: {
      key: "day05",
      weatherDate: weekWeather.day05.data,
      scale: 1.3,
      position: [7.931, WEATHER_ICON_POSITION_Y, WEATHER_ICON_POSITION_Z],
      rotation: WEATHER_ICON_ROTATION,
    },
    day06: {
      key: "day06",
      weatherDate: weekWeather.day06.data,
      scale: 1.3,
      position: [10.615, WEATHER_ICON_POSITION_Y, WEATHER_ICON_POSITION_Z],
      rotation: WEATHER_ICON_ROTATION,
    },
    day07: {
      key: "day07",
      weatherDate: weekWeather.day07.data,
      scale: 1.3,
      position: [13.3, WEATHER_ICON_POSITION_Y, WEATHER_ICON_POSITION_Z],
      rotation: WEATHER_ICON_ROTATION,
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
      <OrbitControls 
       minPolarAngle={0.0}
       maxPolarAngle={Math.PI * 0.4}
       minAzimuthAngle={-0.95}
       maxAzimuthAngle={1.2}
       maxDistance={45.0}
      />
      {/* <axesHelper /> */}

      {/* ENVIRONMENT */}
      <Environment preset="apartment" />
      <directionalLight castShadow position={[1, 2, 3]} intensity={0.5} />
      <ambientLight intensity={0.5} />
      <color args={["#434343"]} attach="background" />

        <Physics debug={false} gravity={[0, -7.5, 0]}>
          {/* STAGE */}
          <group rotation={[0, -Math.PI * 0.065, 0]}>
            <RigidBody type="fixed" colliders="trimesh">
              <Stage />
            </RigidBody>
          </group>

          {/* 3D CITY NAME */}
          <group position={[8, 2.5, -8]} rotation={[-Math.PI * 0.5, 0, 0]}>
            <Center>
              <Text3D
                font="./fonts/helvetiker_regular.typeface.json"
                size={1.5}
                height={0.2}
                curveSegments={12}
                bevelEnabled
                bevelThickness={0.02}
                bevelSize={0.02}
                bevelOffset={0}
                bevelSegments={5}
              >
                City: {props.location.toUpperCase()}
                <meshBasicMaterial color="white" toneMapped={false} />
              </Text3D>
            </Center>
          </group>

          {/* FALLING WEAHTER ICONS */}
          <group position={[-15, 0, 10]}>
            <FallingWeatherIcons
              weatherDate={weekWeather.today.data}
              position={[1.7, 0, 0]}
            />
          </group>

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

          {/* FORECAST TEXTS */}
          <ForecastTexts weekWeather={weekWeather} />
        </Physics>
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

function ForecastTexts({ weekWeather }) {
  return (
    <group rotation={[-Math.PI * 0.5, 0, 0]} position={[0, 2.0, 2.8]}>
      {/* TODAY */}
      <Text
        color="#1C1C1C"
        font="./fonts/abril-fatface-v23-latin-regular.woff"
        fontSize={0.7}
        letterSpacing={-0.05}
        lineHeight={3}
        anchorX="center"
        scale={[1, 1.3, 1]}
        position={[9.7, -4, 0]}
      >
        {weekWeather.today.data.temp.toFixed(1)}°C
      </Text>

      {/* 7 DAYS */}
      <ForecastText date={weekWeather.day01} position={[-3.1, 0, 0]} />
      <ForecastText date={weekWeather.day02} position={[-0.417, 0, 0]} />
      <ForecastText date={weekWeather.day03} position={[2.266, 0, 0]} />
      <ForecastText date={weekWeather.day04} position={[4.949, 0, 0]} />
      <ForecastText date={weekWeather.day05} position={[7.632, 0, 0]} />
      <ForecastText date={weekWeather.day06} position={[10.315, 0, 0]} />
      <ForecastText date={weekWeather.day07} position={[13, 0, 0]} />
    </group>
  );
}

function ForecastText({ date, ...props }) {
  return (
    <group {...props}>
      <Text
        color="#373C38"
        font="./fonts/abril-fatface-v23-latin-regular.woff"
        fontSize={0.8}
        letterSpacing={-0.05}
        lineHeight={1}
        anchorX="center"
        position={[0, 3.8, 0]}
      >
        {date.utcStringdate.slice(0, 3)}
      </Text>
      <Text
        color="#D0104C"
        font="./fonts/abril-fatface-v23-latin-regular.woff"
        fontSize={0.5}
        letterSpacing={-0.05}
        lineHeight={1}
        anchorX="center"
        position={[0, -0.3, 0]}
      >
        {date.data.temp.max.toFixed(1)}°C
      </Text>
      <Text
        color="#005CAF"
        font="./fonts/abril-fatface-v23-latin-regular.woff"
        fontSize={0.5}
        letterSpacing={-0.05}
        lineHeight={1}
        anchorX="center"
        position={[0, -0.9, 0]}
      >
        {date.data.temp.min.toFixed(1)}°C
      </Text>
    </group>
  );
}

useGLTF.preload("./models/weather-icons/clear-small.glb");
useGLTF.preload("./models/weather-icons/clouds-small.glb");
useGLTF.preload("./models/weather-icons/rain-small.glb");
useGLTF.preload("./models/weather-icons/drizzle-small.glb");
useGLTF.preload("./models/weather-icons/thunderstorm-small.glb");
useGLTF.preload("./models/weather-icons/snow-small.glb");
useGLTF.preload("./models/weather-icons/mist-small.glb");
