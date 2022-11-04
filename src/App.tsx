import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { POSITIONS, ROTATIONS } from "./types/constants";

import Desk from "./components/Desk";
import Phone from "./components/Phone";
import Monitor from "./components/Monitor";
import Keyboard from "./components/KeyboardComplex";
import Mouse from "./components/Mouse";
import TablePlant from "./components/TablePlant";
import Guitar from "./components/Guitar";
import ZoomWrapper from "./components/Wrappers/ZoomWrapper";

function App() {
  return (
    <div className="App">
      <Canvas
        shadows
        camera={{
          rotation: ROTATIONS.DEFAULT_CAMERA,
          position: POSITIONS.DEFAULT_CAMERA,
        }}
      >
        <directionalLight
          castShadow
          position={[5.5, 8, 5]}
          intensity={2}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <Environment preset="warehouse" />
        <group scale={1}>
          <Desk position={[0, 0, 0]} scale={0.5} />
          <Phone position={[-1.2, 0.03, 0]} scale={0.2} />
          <ZoomWrapper targetPosition={POSITIONS.MONITOR}>
            <Monitor
              scale={0.003}
              rotation={[0, -Math.PI / 2, 0]}
              position={[0, 0.15, -1.7]}
            />
          </ZoomWrapper>
          <Keyboard castShadow scale={6} position={[0.08, 0.1, 0]} />
          <Mouse
            scale={0.15}
            rotation={[0, -Math.PI / 2, 0]}
            position={[1.15, 0.05, 0]}
          />
          <TablePlant scale={0.25} position={[3.15, 0.1, -1.75]} />
          <ZoomWrapper
            targetPosition={POSITIONS.GUITAR}
            targetRotation={ROTATIONS.GUITAR}
          >
            <Guitar
              scale={5}
              position={[-3.75, 0.7, -0.5]}
              rotation={[0, -Math.PI / 2, 0]}
            />
          </ZoomWrapper>
        </group>
      </Canvas>
    </div>
  );
}

export default App;
