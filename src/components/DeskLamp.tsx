import { useGLTF } from "@react-three/drei";
import { useState } from "react";

export default function DeskLamp(props: any) {
  const { nodes, materials }: any = useGLTF("/models/desk_lamp.glb");
  const [isOn, setIsOn] = useState(true);

  return (
    <group {...props} dispose={null} onClick={() => setIsOn(!isOn)}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0.29, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials.drewno}
            />
          </group>
          <group scale={1} position={[-0.06, 0.67, 0.13]}>
            {isOn ? (
              <rectAreaLight
                width={0.5}
                height={0.35}
                intensity={80}
                color={"#FFFFE0"}
                rotation={[-Math.PI / 2, 0, 0.5]}
                position={[1.5, 1.5, 0]}
              />
            ) : null}
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_6.geometry}
              material={materials.metal}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_7.geometry}
              material={materials["metal.001"]}
            />
          </group>
          <group
            position={[-0.02, 0.58, -0.17]}
            rotation={[Math.PI / 2, -0.27, 0]}
            scale={0.03}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_9.geometry}
              material={materials.chrom}
            />
          </group>
          <group
            position={[-0.89, 2.45, -0.17]}
            rotation={[-Math.PI / 2, 1.49, -Math.PI]}
            scale={0.03}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_11.geometry}
              material={materials.chrom}
            />
          </group>
          <group
            position={[0.48, 2.87, -0.11]}
            rotation={[Math.PI / 2, 1.09, 0]}
            scale={0.03}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_13.geometry}
              material={materials.chrom}
            />
          </group>
          <group
            position={[-0.07, 0.71, -0.14]}
            rotation={[Math.PI / 2, 0.49, Math.PI]}
            scale={0.01}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_15.geometry}
              material={materials.chrom}
            />
          </group>
          <group position={[0.84, 3.17, 0]} rotation={[0, 0, 0.3]} scale={0.16}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_17.geometry}
              material={materials.plastik}
            />
          </group>
          <group
            position={[-0.07, 0.71, 0.14]}
            rotation={[Math.PI / 2, -0.49, 0]}
            scale={0.01}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_19.geometry}
              material={materials.chrom}
            />
          </group>
          <group
            position={[-0.02, 0.58, 0.14]}
            rotation={[Math.PI / 2, -0.49, 0]}
            scale={0.01}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_21.geometry}
              material={materials.chrom}
            />
          </group>
          <group
            position={[-0.89, 2.44, 0.13]}
            rotation={[Math.PI / 2, -0.49, 0]}
            scale={0.01}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_23.geometry}
              material={materials.chrom}
            />
          </group>
          <group
            position={[0.48, 2.87, 0.08]}
            rotation={[Math.PI / 2, -0.49, 0]}
            scale={0.01}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_25.geometry}
              material={materials.chrom}
            />
          </group>
          <group position={[0.92, 2.87, 0]} rotation={[0, 0, -3.14]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_27.geometry}
              material={materials.plastik}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_28.geometry}
              material={materials.zarowka}
            />
          </group>
          <group position={[-0.25, 2.63, 1.95]} rotation={[0, Math.PI / 2, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_30.geometry}
              material={materials.plastik}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/desk_lamp.glb");
