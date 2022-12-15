import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { lazy, Suspense } from 'react'

const ModelComponent = lazy(() => import('./Model'))

const Hovering3DObjects = () => {
  //   const glb = useLoader(GLTFLoader, './imaginary_abstraction.glb')
  return (
    <Canvas flat linear>
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={1} />
        <pointLight position={[0, 0, 0]} color="#ffffff" intensity={1.5} />
        <ModelComponent
          scale={[2.2, 2.2, 2.2]}
          rotation-x={Math.PI}
          position={[0, -0.5, 0]}
        />
        {/* <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshPhongMaterial color="#ffffff" />
        </mesh> */}
      </Suspense>
    </Canvas>
  )
}

export default Hovering3DObjects
