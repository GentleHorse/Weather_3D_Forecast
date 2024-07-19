import { Center, Text3D } from "@react-three/drei";

const TEXT_COLOR_EMISSION_STRENGTH = 10;

export default function WeatherText({ location, weather, scale }) {
  return (
    <group scale={scale}>
      {/* CITY NAME */}
      <group position={[-5, -3, 2]}>
        <Center>
          <Text3D
            font="./fonts/helvetiker_regular.typeface.json"
            size={3.2}
            height={0.5}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            {location.toUpperCase()}
            <meshBasicMaterial
              color={[
                1 * TEXT_COLOR_EMISSION_STRENGTH,
                1 * TEXT_COLOR_EMISSION_STRENGTH,
                1 * TEXT_COLOR_EMISSION_STRENGTH,
              ]}
            />
          </Text3D>
        </Center>
      </group>

      {/* WEATHER DATA DETAILS */}
      <group position={[0, 3, 0]}>
        <group position={[6, 3, 4]}>
          <Center>
            <Text3D
              font="./fonts/helvetiker_regular.typeface.json"
              size={0.75}
              height={0.2}
              curveSegments={12}
              bevelEnabled
              bevelThickness={0.02}
              bevelSize={0.02}
              bevelOffset={0}
              bevelSegments={5}
            >
              Temperature: {weather.main.temp.toFixed(1)}°C
              <meshBasicMaterial
                color={[
                  1 * TEXT_COLOR_EMISSION_STRENGTH,
                  1 * TEXT_COLOR_EMISSION_STRENGTH,
                  1 * TEXT_COLOR_EMISSION_STRENGTH,
                ]}
              />
            </Text3D>
          </Center>
        </group>

        <group position={[6, 1, 4]}>
          <Center>
            <Text3D
              font="./fonts/helvetiker_regular.typeface.json"
              size={0.75}
              height={0.2}
              curveSegments={12}
              bevelEnabled
              bevelThickness={0.02}
              bevelSize={0.02}
              bevelOffset={0}
              bevelSegments={5}
            >
              Humidity: {weather.main.humidity}%
              <meshBasicMaterial
                color={[
                  1 * TEXT_COLOR_EMISSION_STRENGTH,
                  1 * TEXT_COLOR_EMISSION_STRENGTH,
                  1 * TEXT_COLOR_EMISSION_STRENGTH,
                ]}
              />
            </Text3D>
          </Center>
        </group>

        <group position={[6, -1, 4]}>
          <Center>
            <Text3D
              font="./fonts/helvetiker_regular.typeface.json"
              size={0.75}
              height={0.2}
              curveSegments={12}
              bevelEnabled
              bevelThickness={0.02}
              bevelSize={0.02}
              bevelOffset={0}
              bevelSegments={5}
            >
              Wind Speed: {weather.wind.speed.toFixed(1)}MPH
              <meshBasicMaterial
                color={[
                  1 * TEXT_COLOR_EMISSION_STRENGTH,
                  1 * TEXT_COLOR_EMISSION_STRENGTH,
                  1 * TEXT_COLOR_EMISSION_STRENGTH,
                ]}
              />
            </Text3D>
          </Center>
        </group>
      </group>
    </group>
  );
}
