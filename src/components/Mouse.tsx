import { useGLTF } from "@react-three/drei";

export default function Model(props: any) {
  const { nodes, materials }: any = useGLTF("/models/mouse.glb");

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.11}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.DARK_GREY_MATTE}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.DARK_GREY_MATTE}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.NEON_Green_Light}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.Silver}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.Metal}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/mouse.glb");
