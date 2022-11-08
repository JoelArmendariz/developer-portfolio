import "./App.css";
import { Environment, OrbitControls } from "@react-three/drei";

import Desk from "./components/Desk";
import DeskLamp from "./components/DeskLamp";
import Phone from "./components/Phone";
import Monitor from "./components/Monitor/Monitor";
import Keyboard from "./components/KeyboardComplex";
import Mouse from "./components/Mouse";
import TablePlant from "./components/TablePlant";
import Guitar from "./components/Guitar";
import useZoom from "./hooks/useZoom";

function App() {
  const { showOrbitalControls, handleZoom, handleUnzoom, activeObject } =
    useZoom();

  return (
    <>
      <color args={["#6A6C7A"]} attach="background" />
      {showOrbitalControls ? (
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 3}
        />
      ) : null}
      <directionalLight
        castShadow
        position={[5.5, 10, 5]}
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <Environment preset="night" />
      <group onPointerMissed={handleUnzoom}>
        <Desk position={[0, 0, 0]} scale={0.5} />
        <DeskLamp
          scale={0.4}
          position={[-3, 0, -1.5]}
          rotation={[0, -Math.PI / 4, 0]}
        />
        <Phone position={[-1.2, 0.03, 0]} scale={0.2} />
        <Monitor
          activeObject={activeObject}
          handleZoom={handleZoom}
          scale={0.003}
          rotation={[0, -Math.PI / 2, 0]}
          position={[0, 0.15, -1.7]}
        />
        <Keyboard castShadow scale={6} position={[0.08, 0.1, 0]} />
        <Mouse
          scale={0.15}
          rotation={[0, -Math.PI / 2, 0]}
          position={[1.15, 0.05, 0]}
        />
        <TablePlant scale={0.25} position={[3.15, 0.1, -1.75]} />
        <Guitar
          handleZoom={handleZoom}
          scale={5}
          position={[-3.75, 0.7, -0.5]}
          rotation={[0, -Math.PI / 2, 0]}
        />
      </group>
    </>
  );
}

export default App;
