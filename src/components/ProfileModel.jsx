import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function ProfileModel(props) {
  const group = useRef();

  const { scene } = useGLTF("/model/profile2_compressed.glb");
  // const { actions, names } = useAnimations(animations, group);

  // useEffect(() => {
  //   if (!actions || names.length === 0) return;

  //   actions[names[0]]?.reset().fadeIn(0.5).play();

  //   return () => {
  //     actions[names[0]]?.fadeOut(0.5);
  //   };
  // }, [actions, names]);

  return <primitive ref={group} object={scene} {...props} />;
}

useGLTF.preload("/model/profile2.glb");
