import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import React, { useRef } from 'react'
import * as THREE from 'three'

const Model = (props) => {
  const groupRef = useRef()
  const { nodes, materials, scene } = useGLTF('./latest3.glb')
  console.log('nodes', nodes)
  console.log('materials', materials)
  console.log('scene', scene)
  scene.children.forEach((child) => {
    child.castShadow = true
    child.receiveShadow = true

    console.log('child', child)
  })

  const { camera, mouse } = useThree()
  const vec = new THREE.Vector3()

  // animation control
  const rotationSpeed = 0.001
  const sineAmplitude = 0.09
  const scaleSpeed = 0.5
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime()

    // rotating the objects of scene
    scene.children.forEach((child, index) => {
      if (typeof child === typeof THREE.Object3D) return
      if (child.name === 'Cube001') {
        child.rotation.y += 2 * rotationSpeed
        child.rotation.x += rotationSpeed
        // child.scale.x = Math.sin(a * scaleSpeed) * 0.1 + 0.2
        // child.scale.y = Math.sin(a * scaleSpeed) * 0.1 + 0.2
        // child.scale.z = Math.sin(a * scaleSpeed) * 0.1 + 0.2
        return
      }
      child.position.y = Math.sin(a * 0.5 + index * 3) * sineAmplitude
      //   if (
      //     child.name === 'ball1' ||
      //     child.name === 'ball2' ||
      //     child.name === 'ball3' ||
      //     child.name === 'ball4'
      //   ) {
      //     child.position.y = Math.sin(a * 0.5 + 2) * sineAmplitude
      //     return
      //   }
      //   if (child.name === 'cloth' || child.name === 'cloth2') {
      //     child.position.y = Math.sin(a * 0.5 + 5) * sineAmplitude
      //   }
      //   child.position.y = Math.sin(a * 0.5) * sineAmplitude
    })

    // moving the objects in sin wave with random speed, ampilude and initial phase
    // ref1.current.rotation.y += rotationSpeed
    // ref2.current.position.z = Math.sin(a * 0.5 + 0) * sineAmplitude
    // ref3.current.position.z = Math.sin(a * 0.3 + 3) * sineAmplitude

    groupRef.current.rotation.y -= rotationSpeed

    // update camera position based on mouse position
    camera.position.lerp(
      vec.set(mouse.x * 4, mouse.y * 1, camera.position.z),
      0.01
    )
  })

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <primitive object={scene} />
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials.Logo}
        ref={logoCubeRef}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube__0.geometry}
        material={materials.LightPurple}
        ref={weirdBlobRef}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cloth.geometry}
        material={materials.Whitish}
        ref={cloth1Ref}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cloth2.geometry}
        material={materials.Whitish}
        ref={cloht2Ref}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ball1.geometry}
        material={materials['LightPurple.001']}
        ref={ball1Ref}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ball2.geometry}
        material={materials['LightPurple.001']}
        ref={ball2Ref}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ball3.geometry}
        material={materials['LightPurple.001']}
        ref={ball3Ref}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ball4.geometry}
        material={materials['LightPurple.001']}
        ref={ball4Ref}
      /> */}

      {/* <mesh
        castShadow
        receiveShadow
        geometry={model.nodes.Noise_Material002_0.geometry}
        material={model.materials['Material.002']}
        ref={ref2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={model.nodes.Noise_Material003_0.geometry}
        material={model.materials['Material.003']}
        ref={ref3}
      /> */}
      {/* <mesh
        castShadow
        receiveShadow
        geometry={model.nodes.Noise_Material_0.geometry}
        material={model.materials.Material}
      /> */}
    </group>
  )
  // <primitive {...props} object={model.scene} />
}

export default Model
