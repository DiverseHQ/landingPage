import React from "react";

const MainArea = () => {
  return (
    <div className="h-fit w-full relative">
      <div className="text-p-h absolute text-8xl top-[234px] left-[99px] z-20 flex flex-row items-start font-bold">
        <div className="pr-6 flex flex-col items-center justify-center">
          <div>Create</div>
          <div className="border-p-h border w-[250px] font-normal" />
          <div className="text-3xl">Comment</div>
          <div className="border border-p-h w-[180px] font-normal" />
          <div className="text-3xl">Socialize</div>
        </div>
        <div className="font-bold"> to Earn </div>
      </div>
      <div className="absolute top-[497px] right-[90px] z-20">
        <div className="flex flex-col items-center">
          <div className=" background-gradient text-5xl py-7 px-20 rounded-full mb-8">
            Start Creating
          </div>
          <div>
            <div className="flex flex-row items-center">
              <div className="rounded-full w-6 h-6 bg-p-h" />
              <div className="text-3xl ml-2">Join Communities</div>
            </div>
            <div className="flex flex-row items-center">
              <div className="rounded-full w-6 h-6 bg-p-h" />
              <div className="text-3xl ml-2">Express Your Creativity</div>
            </div>
            <div className="flex flex-row items-center">
              <div className="rounded-full w-6 h-6 bg-p-h" />
              <div className="text-3xl ml-2">Get noticed for your work!</div>
            </div>
          </div>
        </div>
      </div>

      {/* <img src="/leftCurve.svg" className="absolute w-[1287px] h-[1206px] top-[0px] left-[-200px] image-unselectable" />
        <img src="/rightCurve.svg" className='absolute w-[1000px] h-[1250px] right-[0px] top-[0px] image-unselectable' style={{ transform: 'translate(400px,-50px)' }}/> */}
      <img
        src="/allCurves.png"
        className="w-full h-[1306px] z-0 image-unselectable"
      />
      <img
        src="/3dIllustrator.png"
        className="absolute top-[425px] left-[50px]"
      />
      {/* <img src="/rightCircle.svg" className='absolute w-[400px] h-[400px] top-[938px] right-[-50px] image-unselectable'/> */}
    </div>
  );
};

export default MainArea;
