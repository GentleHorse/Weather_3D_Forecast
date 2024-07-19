import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Drizzle(props) {
  const { nodes, materials } = useGLTF("./models/weather-icons/drizzle.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve012.geometry}
        material={materials.rainMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve013.geometry}
        material={materials.rainMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve014.geometry}
        material={materials.rainMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve015.geometry}
        material={materials.rainMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve016.geometry}
        material={materials.rainMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve017.geometry}
        material={materials.edgeMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve018.geometry}
        material={materials.edgeMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve019.geometry}
        material={materials.edgeMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve020.geometry}
        material={materials.edgeMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve021.geometry}
        material={materials.edgeMaterial}
      />
    </group>
  );
}

useGLTF.preload("./models/weather-icons/drizzle.glb");
