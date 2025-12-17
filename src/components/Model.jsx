import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { CameraControls, Environment, useGLTF } from "@react-three/drei";
import { ModelRotationWrapper } from "./ModelRotationWrapper";

export function HeroModel() {
  return (
    <Canvas
      className="canvas"
      shadows
      camera={{ position: [5, 0, 15], fov: 30 }}
    >
      <ModelRotationWrapper>
        <Porsche scale={1.2} position={[0, -1.5, 0]} rotation={[0, 3.5, 0]} />
      </ModelRotationWrapper>

      <Environment
        environmentIntensity={0.09}
        preset="studio"
        background={false}
      />

      <CameraControls
        mouseButtons={{
          middle: 0,
          left: 0,
          right: 0,
          wheel: 0,
        }}
        touches={{
          one: 0,
          two: 0,
          three: 0,
        }}
      />
    </Canvas>
  );
}

function Porsche(props) {
  const { scene, nodes, materials } = useGLTF("/model/profile-compressed.glb");

  useEffect(() => {
    if (!nodes || !materials) return;
  }, [nodes, materials]);

  return <primitive object={scene} {...props} />;
}
