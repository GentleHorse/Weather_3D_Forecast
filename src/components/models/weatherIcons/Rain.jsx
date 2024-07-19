import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Rain(props) {
  const { nodes, materials } = useGLTF("./models/weather-icons/rain.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve006.geometry}
        material={materials.rainMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve007.geometry}
        material={materials.rainMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve008.geometry}
        material={materials.rainMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve009.geometry}
        material={materials.edgeMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve010.geometry}
        material={materials.edgeMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve011.geometry}
        material={materials.edgeMaterial}
      />
    </group>
  );
}

useGLTF.preload("./models/weather-icons/rain.glb");
