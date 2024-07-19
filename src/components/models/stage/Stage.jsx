/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 ./public/models/stage/stage.glb 
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Stage(props) {
  const { nodes, materials } = useGLTF("/models/stage/stage.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.table.geometry}
        material={materials.wood}
        scale={1.386}
      />
      <mesh
        geometry={nodes["news-paper"].geometry}
        material={materials.paper}
        position={[2.535, 0.387, 0.473]}
        rotation={[0, 0.214, 0]}
      />
      <mesh
        geometry={nodes.cup001.geometry}
        material={materials["coffee-cup"]}
        position={[-9.038, 2.683, -0.555]}
        rotation={[0, 1.567, 0]}
        scale={[1.599, 1.114, 1.599]}
      />
      <mesh
        geometry={nodes.saucer001.geometry}
        material={materials["coffee-cup"]}
        position={[-9.02, 1.881, -0.529]}
        scale={1.633}
      />
      <mesh
        geometry={nodes["coffee-liquid"].geometry}
        material={materials["coffee-liquid"]}
        position={[-9.055, 3.375, -0.55]}
        scale={1.52}
      />
    </group>
  );
}

useGLTF.preload("/models/stage/stage.glb");
