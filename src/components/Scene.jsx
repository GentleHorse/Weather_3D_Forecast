import { Suspense, useRef } from "react";
import { MeshReflectorMaterial, useGLTF } from "@react-three/drei";
import { RigidBody, CuboidCollider } from "@react-three/rapier";
import Stage from "../components/models/stage/Stage.jsx";

export default function Scene(props) {
  return (
    <>
      {/* STAGE */}
      <RigidBody type="fixed" >
        <Stage />
      </RigidBody>
    </>
  );
}

useGLTF.preload("/models/exhibitionSpace/exhibitionSpace.gltf");
