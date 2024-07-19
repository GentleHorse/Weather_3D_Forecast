import { Center, Text3D } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function LoadingScene({ error }) {
  const text3D = useRef();

  useFrame((state, delta) => {
    text3D.current.rotation.y += delta * 2;
  });

  return (
    <>
      <group rotation={[0, Math.PI * 0.1, 0]}>
        <Center ref={text3D}>
          <Text3D
            font="./fonts/helvetiker_regular.typeface.json"
            size={0.95}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            Loading weather models ....
            <meshNormalMaterial />
          </Text3D>
        </Center>
      </group>
    </>
  );
}
