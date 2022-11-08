import { useState } from "react";
import { Html, useGLTF } from "@react-three/drei";
import MonitorContent from "./MonitorContent";
import { Objects } from "../../types/constants";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import IconButton from "@mui/material/IconButton";

export default function Monitor({ activeObject, handleZoom, ...props }: any) {
  const { nodes, materials }: { nodes: any; materials: any } = useGLTF(
    "/models/monitor.glb"
  );
  const [isOn, setIsOn] = useState(true);

  return (
    <group {...props} name="monitor" dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[2.8, -38.91, -25.18]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={27.46}
          >
            <group position={[2.72, 0.3, 10.79]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.group_0_Material001_0.geometry}
                material={materials["Material.001"]}
              />
            </group>
            <group position={[2.44, 6.74, 10.75]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.group_0001_Material001_0.geometry}
                material={materials["Material.001"]}
              />
            </group>
            <group position={[3.57, 0, 11.67]}>
              {isOn ? (
                <>
                  <rectAreaLight
                    width={2}
                    height={1.5}
                    intensity={15}
                    color={"#57cbff"}
                    rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                    position={[0.1, 1, 0]}
                  />
                  <Html
                    position={[0.01, 0, 0]}
                    rotation={[Math.PI / 2, Math.PI / 2, 0]}
                    transform
                    occlude
                  >
                    <MonitorContent
                      activeObject={activeObject}
                      handleZoom={handleZoom}
                    />
                  </Html>
                </>
              ) : null}
              <Html
                position={[0.02, 0, 0]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}
                transform
                occlude
              >
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOn(!isOn);
                  }}
                  size="large"
                  style={{
                    color: "#e1e3ee",
                    position: "absolute",
                    top: "15rem",
                    left: "33rem",
                  }}
                >
                  <PowerSettingsNewIcon />
                </IconButton>
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                    if (activeObject === Objects.MONITOR_FULLSCREEN) {
                      handleZoom(Objects.MONITOR);
                    } else {
                      handleZoom(Objects.MONITOR_FULLSCREEN);
                    }
                  }}
                  size="large"
                  style={{
                    color: "#e1e3ee",
                    position: "absolute",
                    top: "15rem",
                    left: "31rem",
                  }}
                >
                  {activeObject === Objects.MONITOR_FULLSCREEN ? (
                    <FullscreenExitIcon />
                  ) : (
                    <FullscreenIcon />
                  )}
                </IconButton>
              </Html>
              <mesh
                name="monitor"
                castShadow
                receiveShadow
                geometry={nodes.group_0002_layar_0.geometry}
                material={materials.layar}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.SketchUp_material_0.geometry}
              material={materials.material}
            />
          </group>
          <group
            position={[0.88, -35.72, -9.29]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={27.46}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.SketchUp001_Material002_0.geometry}
              material={materials["Material.002"]}
            />
          </group>
          <group
            position={[3.45, 183.43, -24.24]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={27.46}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.SketchUp003_Material002_0.geometry}
              material={materials["Material.002"]}
            />
          </group>
          <group
            position={[0.88, -35.72, -9.29]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={27.46}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.SketchUp002_Material003_0.geometry}
              material={materials["Material.003"]}
            />
          </group>
          <group
            position={[0.88, -35.72, -9.29]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={27.46}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.SketchUp004_Material003_0.geometry}
              material={materials["Material.003"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/monitor.glb");
