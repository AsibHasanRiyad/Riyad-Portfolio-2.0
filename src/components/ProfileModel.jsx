import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function ProfileModel(props) {
  const group = useRef();

  const { scene, animations } = useGLTF("/model/profile2.glb");
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    if (!actions || names.length === 0) return;

    // Play first animation
    actions[names[0]]?.reset().fadeIn(0.5).play();

    return () => {
      actions[names[0]]?.fadeOut(0.5);
    };
  }, [actions, names]);

  return <primitive ref={group} object={scene} {...props} />;
}

useGLTF.preload("/model/profile2.glb");
