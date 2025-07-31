import * as THREE from "three";
import { Bounds } from "@react-three/drei";
import { useRef } from "react";
import usePlayerAnimation from "../hooks/usePlayerAnimation";

export default function Player() {
  const player = useRef<THREE.Group>(null);
  usePlayerAnimation(player);

  return (
    <Bounds fit clip observe margin={10}>
      <group ref={player}>
        <mesh position={[0, 0, 10]} castShadow receiveShadow>
          <boxGeometry args={[15, 15, 20]} />
          <meshLambertMaterial color={0xffffff} flatShading />
        </mesh>
        <mesh position={[0, 0, 21]} castShadow receiveShadow>
          <boxGeometry args={[2, 4, 2]} />
          <meshLambertMaterial color={0xf0619a} flatShading />
        </mesh>
        <mesh position={[0, 0, 10]} castShadow receiveShadow>
          <boxGeometry args={[20, 7, 3]} />
          <meshLambertMaterial color={0xffffff} flatShading />
        </mesh>
        {/*         <mesh position={[0, -10, 8]} castShadow receiveShadow>
          <boxGeometry args={[3, 3, 3]} />
          <meshLambertMaterial color={0xcccccc} flatShading />
        </mesh> */}
      </group>
    </Bounds>
  );
}
