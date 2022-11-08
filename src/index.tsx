import React from "react";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { POSITIONS, ROTATIONS } from "./types/constants";
import "./index.css";
import "@fontsource/roboto-mono";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="App">
      <Canvas
        shadows
        camera={{
          rotation: ROTATIONS.DEFAULT_CAMERA,
          position: POSITIONS.DEFAULT_CAMERA,
        }}
      >
        <App />
      </Canvas>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
