import React from 'react'

const MainBlockArea = () => {
  return (
    <div className="flex flex-row w-full justify-between items-center pt-[300px] px-20">
      <div className="flex flex-col justify-center items-start">
        <div className="font-bold text-6xl mb-10 max-w-[650px]">
          The Social Media based on Community
        </div>
        <div
          className="font-bold text-xl mb-14 max-w-[750px]"
          style={{ letterSpacing: '2px' }}
        >
          DiverseHQ is new Generation of Social Media on Web3, that help to
          creators to build their Community with many Features.
        </div>
        <button className="cursor-pointer bg-p-h py-3 px-9 rounded-full text-xl leading-9">
          Start Creating
        </button>
      </div>
      <div>Todo 3d Canavas using Threejs</div>
    </div>
  )
}

export default MainBlockArea
