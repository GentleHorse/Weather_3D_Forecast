import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Snow(props) {
  const { nodes, materials } = useGLTF("./models/weather-icons/snow.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve022.geometry}
        material={materials.snowMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve023.geometry}
        material={materials.edgeMaterial}
      />
    </group>
  );
}

useGLTF.preload("./models/weather-icons/snow.glb");
