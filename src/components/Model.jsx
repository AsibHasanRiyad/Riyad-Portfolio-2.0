import { Canvas } from "@react-three/fiber";
import { CameraControls, Environment } from "@react-three/drei";
import { ModelRotationWrapper } from "./ModelRotationWrapper";
import { ProfileModel } from "./ProfileModel";

export function HeroModel() {
  return (
    <Canvas shadows camera={{ position: [5, 0, 15], fov: 30 }}>
      <ModelRotationWrapper>
        <ProfileModel
          scale={2.9}
          position={[0, -1.6, 0]}
          rotation={[0.02, 1.3, 0]}
        />
      </ModelRotationWrapper>

      <Environment preset="forest" environmentIntensity={0.7} />

      <CameraControls
        mouseButtons={{ left: 0, middle: 0, right: 0, wheel: 0 }}
        touches={{ one: 0, two: 0, three: 0 }}
      />
    </Canvas>
  );
}
