import { useGLTF } from "@react-three/drei";

export default function Keyboard(props: any) {
  const { nodes, materials }: any = useGLTF("/models/keyboard.glb");

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[-63.5, -2.36, -21.03]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.BackPlate_BackPlate_0.geometry}
              material={materials.BackPlate}
            />
          </group>
          <group
            position={[-59.14, -0.25, -16.85]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Keycap_Keycaps_0.geometry}
              material={materials.Keycaps}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/keyboard.glb");
