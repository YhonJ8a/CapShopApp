/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 Cap7.gltf 
Author: ely3 (https://sketchfab.com/ely3)
License: CC-BY-SA-4.0 (http://creativecommons.org/licenses/by-sa/4.0/)
Source: https://sketchfab.com/3d-models/cap-4c90a2ee69b64f58979f7ce2475f230f
Title: Cap
*/

import React from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('/Cap7.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="fmk_0" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.lambert5} />
              </group>
              <group name="ghf_1" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials.lambert4} />
              </group>
              <group name="jgf_2" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.lambert3} />
              </group>
              <group name="kmh_3" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                <mesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.lambert6} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Cap7.gltf')