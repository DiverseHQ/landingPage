// import { OrbitControls } from '@react-three/drei'
// import { Canvas } from '@react-three/fiber'
import React from 'react'
import { START_FORM_LINK } from '../../utils/config/config'
import Hovering3DObjects from './Hovering3DObjects'

const MainBlockArea = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full justify-center sm:justify-between items-center sm:px-16 pt-[150px] sm:pt-0">
      <div className="flex flex-col justify-center items-start w-full px-8 sm:px-0 sm:w-[550px] pb-8 sm:pt-10">
        <div className="font-bold text-2xl  sm:text-5xl mb-10 font-family-glory ">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          You don't need audience to earn from your content
        </div>
        <div
          className="text-xl mb-14 leading-6 sm:leading-8"
          style={{ letterSpacing: '2px' }}
        >
          We believe access and content reach is not just for famous few. Join
          us in our mission to democratize and give this power back to you.
        </div>
        <a href={START_FORM_LINK} target="_blank" rel="noreferrer">
          <div className="cursor-pointer bg-p-h py-3 px-9 rounded-full text-xl leading-9 ease-in-out  transition delay-150 duration-300 hover:scale-110 hover:bg-purple-800">
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
