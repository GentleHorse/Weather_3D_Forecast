import { useGLTF } from "@react-three/drei";

const WeatherIcons = () => {
  const clear = useGLTF("./models/weather-icons/clear-small.glb");
  const cloud = useGLTF("./models/weather-icons/cloud-small.glb");
  const drizzle = useGLTF("./models/weather-icons/drizzle-small.glb");
  const mist = useGLTF("./models/weather-icons/mist-small.glb");
  const rain = useGLTF("./models/weather-icons/rain-small.glb");
  const snow = useGLTF("./models/weather-icons/snow-small.glb");
  const thunderstorm = useGLTF("./models/weather-icons/thunderstorm-small.glb");

  return (
    <group position={[0, 0.5, 0]}>
    <primitive object={clear.scene} scale={1} position-x={-6} />
    <primitive object={cloud.scene} scale={1} position-x={-4} />
    <primitive object={drizzle.scene} scale={1} position-x={-2} />
    <primitive object={mist.scene} scale={1} position-x={0} />
    <primitive object={rain.scene} scale={1} position-x={2} />
    <primitive object={snow.scene} scale={1} position-x={4} />
    <primitive object={thunderstorm.scene} scale={1} position-x={6} />
  </group>
  );
};

export default WeatherIcons;
