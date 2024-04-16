/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/airplane/model.glb
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const HELIX_SPEED = 6;

export function Airplane(props) {
  const { nodes, materials } = useGLTF("./models/airplane/model.glb");
  const helix = useRef();

  useFrame((_state, delta) => {
    helix.current.rotation.x += delta * HELIX_SPEED;
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.PUSHILIN_Plane_Circle000.geometry}
        material={materials.plane}
      />
      <mesh
        ref={helix}
        geometry={nodes.PUSHILIN_Plane_Helix.geometry}
        material={materials.plane}
        position={[1.09, 0.23, 0]}
      />
    </group>
  );
}

useGLTF.preload("./models/airplane/model.glb");
