import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Hovering3DObjects from './Hovering3DObjects'

const MainBlockArea = () => {
  return (
    <div className="flex flex-row w-full justify-between items-center px-16">
      <div className="flex flex-col justify-center items-start w-[550px]">
        <div className="font-bold text-5xl mb-10 ">
          The Social Media based on Community
        </div>
        <div
          className="font-bold text-xl mb-14"
          style={{ letterSpacing: '2px' }}
        >
          DiverseHQ is new Generation of Social Media on Web3, that help to
          creators to build their Community with many Features.
        </div>
        <button className="cursor-pointer bg-p-h py-3 px-9 rounded-full text-xl leading-9">
          Start Creating
        </button>
      </div>
      <div
        style={{ backgroundColor: 'transparent' }}
        className="w-[900px] h-[900px]"
      >
        <Hovering3DObjects />
      </div>
    </div>
  )
}

export default MainBlockArea
