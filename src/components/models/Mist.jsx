import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Mist(props) {
  const { nodes, materials } = useGLTF("./models/weather-icons/mist.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve024.geometry}
        material={materials.mistMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve025.geometry}
        material={materials.mistMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve026.geometry}
        material={materials.mistMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve027.geometry}
        material={materials.mistMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve028.geometry}
        material={materials.edgeMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve029.geometry}
        material={materials.edgeMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve030.geometry}
        material={materials.edgeMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve031.geometry}
        material={materials.edgeMaterial}
      />
    </group>
  );
}

useGLTF.preload("./models/weather-icons/mist.glb");
