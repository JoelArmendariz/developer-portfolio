import { useGLTF } from "@react-three/drei";

export default function Desk(props: any) {
  const { nodes, materials }: { nodes: any; materials: any } =
    useGLTF("/models/desk.glb");

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={8}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane_Desk_Material_0.geometry}
              material={materials.Desk_Material}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/desk.glb");
