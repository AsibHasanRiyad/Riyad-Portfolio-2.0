import { useFrame } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";

export function ModelRotationWrapper({ children }) {
  const group = React.useRef();

  // Max rotation limits (radians)
  const MAX_Y = 24; // left-right
  const MAX_X = 0; // up-down

  useFrame(({ mouse }) => {
    if (!group.current) return;

    // Raw target rotations
    let targetRotationY = mouse.x * 0.8;
    let targetRotationX = mouse.y * -0.5;

    // Clamp rotations
    targetRotationY = THREE.MathUtils.clamp(targetRotationY, -MAX_Y, MAX_Y);

    targetRotationX = THREE.MathUtils.clamp(targetRotationX, -MAX_X, MAX_X);

    // Smooth interpolation
    group.current.rotation.y +=
      (targetRotationY - group.current.rotation.y) * 0.05;

    group.current.rotation.x +=
      (targetRotationX - group.current.rotation.x) * 0.05;
  });

  return <group ref={group}>{children}</group>;
}
