import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { START_FORM_LINK } from '../../utils/config/config'
import Hovering3DObjects from './Hovering3DObjects'

const MainBlockArea = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full justify-center sm:justify-between items-center sm:px-16 pt-[150px] sm:pt-0">
      <div className="flex flex-col justify-center items-start w-full px-8 sm:px-0 sm:w-[550px] pb-8">
        <div className="font-bold text-2xl  sm:text-5xl mb-10 ">
          The Social Media based on Community
        </div>
        <div
          className="sm:font-bold text-xl mb-14"
          style={{ letterSpacing: '2px' }}
        >
          DiverseHQ is new Generation of Social Media on Web3, that help to
          creators to build their Community with many Features.
        </div>
        <a href={START_FORM_LINK} target="_blank" rel="noreferrer">
          <div className="cursor-pointer bg-p-h py-3 px-9 rounded-full text-xl leading-9">
            Start Creating
          </div>
        </a>
      </div>
      <div
        style={{ backgroundColor: 'transparent' }}
        className="w-full h-[300px] sm:w-[900px] sm:h-[900px]"
      >
        <Hovering3DObjects />
      </div>
    </div>
  )
}

export default MainBlockArea
