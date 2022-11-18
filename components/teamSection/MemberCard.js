import React from "react";
import PropTypes from "prop-types";

const MemberCard = ({ image, name, bio }) => {
  return (
    <div className="flex flex-row items-center border rounded p-1 m-9 w-[500px] h-[220px] bg-p-bg rounded-[60px] p-6">
      <img src={image} alt="avatar" className="w-40 h-40 border rounded-full" />
      <div className="flex flex-col p-8">
        <div className="text-4xl pb-3 text-s-h">{name}</div>
        <div className="text-3xl">{bio}</div>
        <div className="border-b-4 border-s-h w-[136px] mt-5" />
      </div>
    </div>
  );
};

MemberCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  bio: PropTypes.string,
};

export default MemberCard;
