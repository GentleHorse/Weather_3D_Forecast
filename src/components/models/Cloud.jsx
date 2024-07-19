import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Cloud(props) {
  const { nodes, materials } = useGLTF("./models/weather-icons/cloud.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve002.geometry}
        material={materials.cloudMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve003.geometry}
        material={materials.edgeMaterial}
      />
    </group>
  );
}

useGLTF.preload("./models/weather-icons/cloud.glb");
