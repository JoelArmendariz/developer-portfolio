import { useGLTF } from "@react-three/drei";

export default function Monitor(props: any) {
  const { nodes, materials }: { nodes: any; materials: any } = useGLTF(
    "/models/monitor.glb"
  );

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
