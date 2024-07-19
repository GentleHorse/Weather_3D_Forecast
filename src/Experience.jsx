import { Suspense } from "react";
import {
  useGLTF,
  OrbitControls,
  Environment,
  PresentationControls,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Physics, RigidBody } from "@react-three/rapier";
import Scene from "./components/Scene.jsx";
import WeatherText from "./components/WeatherText.jsx";
import PostProcessingEffects from "./components/PostProcessingEffects.jsx";
import FallingWeatherIcons from "./components/FallingWeatherIcons.jsx";

export default function Experience(props) {
  let weatherCondition;
  switch (props.weather.weather[0].main) {
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

  const loadedIcon = useGLTF(
    `./models/weather-icons/${weatherCondition}-small.glb`
  );

  const marina = useGLTF("./models/Marina-1276/Marina-1276.glb");

  return (
    <>
      {/* DEBUG TOOLS */}
      {/* <Perf position="top-left" /> */}
      {/* <OrbitControls makeDefault /> */}
      {/* <axesHelper /> */}

      {/* ENVIRONMENT */}
      <Environment preset="night" />
      {/* <directionalLight castShadow position={[1, 2, 3]} intensity={0.5} /> */}
      {/* <ambientLight intensity={0.5} /> */}
      <color args={["black"]} attach="background" />

      {/* POSTPROCESSING */}
      <PostProcessingEffects />

      <PresentationControls
        global
        polar={[0.0, 0.0]}
        azimuth={[-0.95, 1.2]}
        // config={{ mass: 2, tension: 400 }}
      >
        <Physics debug={false} gravity={[0, -3.5, 0]}>
          {/* SCENE */}
          <Scene weather={weatherCondition} />

          {/* FALLING WEAHTER ICONS */}
          <FallingWeatherIcons weatherCondition={weatherCondition} />

          {/* WEATHER ICON */}
          <Suspense>
            <RigidBody type="fixed">
              <group scale={0.5}>
                <primitive
                  object={loadedIcon.scene}
                  position={[-5, 2.5, 0]}
                  scale={4.5}
                />
              </group>
            </RigidBody>
          </Suspense>

          {/* WEATHER TEXT */}
          <Suspense>
            <RigidBody type="fixed">
              <WeatherText
                location={props.location}
                weather={props.weather}
                scale={0.5}
              />
            </RigidBody>
          </Suspense>

          {/* MARINA */}
          <RigidBody type="fixed" colliders="hull">
            <primitive
              object={marina.scene}
              scale={1.2}
              position={[-1.5, -2.5, 4]}
              rotation-y={Math.PI * 0.7}
            />
          </RigidBody>
        </Physics>
      </PresentationControls>
    </>
  );
}
