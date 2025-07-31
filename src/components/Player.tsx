import { Bounds } from "@react-three/drei";

const Player = () => {
  return (
    <Bounds fit clip observe margin={15}>
      {/* framing the scene center when resizzing window ,if margin  1 the content fill the screen*/}
      <mesh position={[0, 0, 10]} castShadow receiveShadow>
        <boxGeometry args={[15, 15, 20]} />
        <meshLambertMaterial color={0xffffff} flatShading />
      </mesh>
    </Bounds>
  );
};

export default Player;
