import React from "react";
import PropTypes from "prop-types";
const ContentBlock = ({ title, body }) => {
  return (
    <div className="w-[368px]">
      <div className="text-4xl pb-4">{title}</div>
      <div className="text-2xl">{body}</div>
    </div>
  );
};

ContentBlock.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default ContentBlock;
