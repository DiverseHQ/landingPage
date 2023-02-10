// import { OrbitControls } from '@react-three/drei'
// import { Canvas } from '@react-three/fiber'
import React from 'react'
import { APP_LINK } from '../../utils/config/config'
import Hovering3DObjects from './Hovering3DObjects'

const MainBlockArea = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row w-full justify-center sm:justify-between items-center sm:px-16">
      <div className="flex flex-col justify-center items-start w-full px-8 sm:px-0 sm:w-[550px] pt-4 sm:pt-20 pb-8">
        <div className="font-bold text-2xl  sm:text-5xl mb-10 font-family-glory ">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Building next Reddit, where anyone can easily grow their audience.
        </div>
        <div
          className="text-xl mb-14 leading-6 sm:leading-8"
          style={{ letterSpacing: '2px' }}
        >
          Monetization and content reach is not just for famous. Join us in our
          mission to democratize and give this power back to you.
        </div>
        <a href={APP_LINK} target="_blank" rel="noreferrer">
          <div className="cursor-pointer bg-p-h py-3 px-9 rounded-full text-xl leading-9 ease-in-out  transition delay-150 duration-200 hover:scale-110">
            Start Creating
          </div>
        </a>
      </div>
      <div
        style={{ backgroundColor: 'transparent' }}
        className="w-full h-[420px] sm:w-[900px] sm:h-screen"
      >
        <Hovering3DObjects />
      </div>
    </div>
  )
}

export default MainBlockArea
