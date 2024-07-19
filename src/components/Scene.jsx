import { Suspense, useRef } from "react";
import {
  MeshReflectorMaterial,
  useVideoTexture,
  useGLTF,
} from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function Scene(props) {
  const videoTexture = useVideoTexture(`./videos/${props.weather}.mp4`);

  const { nodes, materials } = useGLTF(
    "/models/exhibitionSpace/exhibitionSpace.gltf"
  );

  return (
    <>
      {/* FLOOR */}
      <RigidBody type="fixed" restitution={0.3}>
        <mesh receiveShadow position-y={-2.5} rotation-x={-Math.PI * 0.5}>
          <planeGeometry args={[25, 25]} />
          <MeshReflectorMaterial
            resolution={512}
            blur={[1000, 1000]}
            mixBlur={0.5}
            mirror={0.85}
            color="#51568d"
          />
        </mesh>
      </RigidBody>

      {/* VIDEO PROJECTION GEOMETRY */}
      <Suspense>
        <RigidBody type="fixed">
          <mesh position={[0, 0.5, -5.5]} scale={[4.8, 4.4, 4.5]}>
            <boxGeometry args={[2.5, 1, 0.07]} />
            <meshBasicMaterial map={videoTexture} toneMapped={false} />
          </mesh>
        </RigidBody>
      </Suspense>

      {/* EXHIBITION SPACE */}
      <group scale={[1, 0.6, 0.7]} position={[0, -2, 0]} dispose={null}>
        <group position={[0, 13.989, 0]} scale={[9.838, 0.49, 0.432]}>
          <mesh
            geometry={nodes.Cube006.geometry}
            material={materials.wire_027177088}
          />
          <mesh
            geometry={nodes.Cube006_2.geometry}
            // material={materials["white-color-wall"]}
          >
            <meshStandardMaterial color="#191933" roughness={0.8} />
          </mesh>
          <mesh
            geometry={nodes.Cube006_3.geometry}
            material={materials["dark-color-wood"]}
          />
          <mesh
            geometry={nodes.Cube006_4.geometry}
            // material={nodes.Cube006_4.material}
          >
            <meshStandardMaterial color="slategray" roughness={0.8} />
          </mesh>
        </group>
      </group>
    </>
  );
}

useGLTF.preload("/models/exhibitionSpace/exhibitionSpace.gltf");
