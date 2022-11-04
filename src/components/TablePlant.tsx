import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props: any) {
  const group = useRef();
  const { nodes, materials }: { nodes: any; materials: any } = useGLTF(
    "/models/table-plant.gltf"
  );
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.plant001.geometry}
        material={materials["Material.028"]}
      >
        <mesh
          geometry={nodes.NurbsPath008.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.NurbsPath010.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          geometry={nodes.Circle001.geometry}
          material={materials["Material.030"]}
        />
        <mesh
          geometry={nodes.NurbsPath009.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          geometry={nodes.NurbsPath006.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          geometry={nodes.NurbsPath007.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.NurbsPath011.geometry}
          material={materials["Material.002"]}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/table-plant.gltf");
