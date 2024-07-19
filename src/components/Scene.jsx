import { RigidBody } from "@react-three/rapier";
import { Root, Text as UikitText, Container } from "@react-three/uikit";
import { Text as DreiText } from "@react-three/drei";

import Stage from "../components/models/stage/Stage.jsx";

export default function Scene(props) {
  return (
    <>
      {/* WEATHER DATA */}
      {/* <group
        position={[0, 5, 0]}
        rotation={[-Math.PI * 0.5, 0, Math.PI * 0.065]}
      >
        <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
          <DreiText color="black" anchorX="center" anchorY="middle">
            THE WEATHER
          </DreiText>
        </group>

        <group position={[0, -2, 0]} rotation={[0, 0, 0]}>
          <DreiText color="black" anchorX="center" anchorY="middle">
            THE WEATHER
          </DreiText>
        </group>
      </group> */}

      {/* <group position={[0, 8, 0]} rotation={[0, 0, 0]}>
        <Root>
          <Container flexDirection="column" gap={15}>
            <Text fontSize={65} color="#000000">
              Ambience of Light
            </Text>
            <Text fontSize={18}>
              Here is the short discription of the project.
            </Text>
          </Container>
        </Root>
      </group> */}

      {/* STAGE */}
      <RigidBody type="fixed">
        <Stage />
      </RigidBody>
    </>
  );
}
