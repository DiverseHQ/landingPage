import React from "react";
import ContentBlock from "./ContentBlock";

const FeatureMain = () => {
  return (
    <div className="relative w-full h-[1000px]">
      <img src="/leftBlob.png" className="absolute top-[200px] left-0" />
      <img
        src="/rightBlob.png"
        className="absolute top-[628px] right-[371px]"
      />
      <div className="absolute top-[200px] left-[464px]">
        <ContentBlock
          title="Sharing is Earning"
          body="Creating a positive sum game for everyone and rewarding users for posting their content."
        />
      </div>
      <div className="absolute top-[650px] left-[155px]">
        <ContentBlock
          title="Useful content"
          body="Make your content discoverable using the power of community."
        />
      </div>
      <div className="absolute top-[628px] right-[120px]">
        <ContentBlock
          title="Create Community"
          body="Develop a niche community.Deep dive into things and promote with those who have similar interests."
        />
      </div>
    </div>
  );
};

export default FeatureMain;
