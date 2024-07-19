import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Thunderstorm(props) {
  const { nodes, materials } = useGLTF("./models/weather-icons/thunderstorm.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        material={materials.thunderstormMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve001.geometry}
        material={materials.thunderstormMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve004.geometry}
        material={materials.edgeMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve005.geometry}
        material={materials.edgeMaterial}
      />
    </group>
  );
}

useGLTF.preload("./models/weather-icons/thunderstorm.glb");
