import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export  default function Model(props) {
  const { nodes, materials } = useGLTF("/static/bear_in_an_igloo.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.03}>
          <group
            position={[0.14, 2.48, -2.06]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.igloo_igloo_0.geometry}
              material={materials.igloo}
            />
          </group>
          <group position={[0.16, 1.22, 14.78]} rotation={[0.44, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bear_bear_0.geometry}
              material={materials.bear}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/static/bear_in_an_igloo.glb");