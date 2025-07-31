import { Canvas } from "@react-three/fiber";

const Scene = ({ children }: { children: React.ReactNode }) => {
  return (
    <Canvas
      orthographic={true}
      shadows={true}
      camera={{
        up: [0, 0, 1],
        position: [300, -300, 300],
      }}
    >
      <ambientLight />
      {/* <directionalLight position={[-100, -100, 100]} /> */}
      <directionalLight
        position={[-100, -100, 200]}
        up={[0, 0, 1]}
        castShadow
        // intensity={0.5}
        shadow-mapsize={[2048, 2048]}
        shadow-camera-left={-400}
        shadow-camera-right={400}
        shadow-camera-top={400}
        shadow-camera-bottom={-400}
        shadow-camera-near={50}
        shadow-camera-far={400}
      />
      {children}
    </Canvas>
  );
};

export default Scene;
