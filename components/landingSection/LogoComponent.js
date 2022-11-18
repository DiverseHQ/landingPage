import Image from "next/image";
import React from "react";

const LogoComponent = () => {
  return (
    <div className="flex flex-row justify-center items-center border-2 rounded-full border-text-blue h-fit">
      <Image src="/logo.png" width={50} height={50} className="rounded-full" />
      <div className="text-xl ml-[8px] mr-[8px]">Diverse HQ</div>
    </div>
  );
};

export default LogoComponent;
