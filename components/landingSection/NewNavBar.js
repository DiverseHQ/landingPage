import React from "react";
import PropTypes from "prop-types";

import LogoComponent from "./LogoComponent";

const NewNavBar = ({ featureSectionRef, teamSectionRef }) => {
  const onClickFeatures = () => {
    featureSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const onClickTeam = () => {
    teamSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="w-full flex flex-row justify-between items-center border-b border-[#999292] px-6 absolute z-10">
      <LogoComponent />
      <div className="flex flex-row items-center justify-center gap-x-11">
        <div className="text-xl hover:text-p-h hover:border-b-4 hover:border-p-h hover:mb-[-4px] py-6">
          Community
        </div>
        <div
          className="text-xl hover:text-p-h hover:border-b-4 hover:border-p-h hover:mb-[-4px] py-6"
          onClick={onClickTeam}
        >
          Team
        </div>
        <div className="text-xl hover:text-p-h hover:border-b-4 hover:border-p-h hover:mb-[-4px] py-6">
          Blog
        </div>
        <div
          className="text-xl hover:text-p-h hover:border-b-4 hover:border-p-h hover:mb-[-4px] py-6"
          onClick={onClickFeatures}
        >
          Features
        </div>
        <div className="background-gradient py-2 px-9 rounded-full text-xl leading-9">
          Launch APP
        </div>
      </div>
    </div>
  );
};

NewNavBar.propTypes = {
  featureSectionRef: PropTypes.object.isRequired,
  teamSectionRef: PropTypes.object.isRequired,
};

export default NewNavBar;
