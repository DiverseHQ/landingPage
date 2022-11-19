import React from 'react'
import PropTypes from 'prop-types'

const MemberCard = ({ image, name, bio }) => {
  return (
    <div className="flex flex-row items-center border rounded-[20px] sm:rounded m-3 sm:m-9 w-[150px] sm:w-[500px] h-[65px] sm:h-[220px] bg-p-bg sm:rounded-[60px] p-3 sm:p-6">
      <img
        src={image}
        alt="avatar"
        className="w-11 sm:w-40 h-11 sm:h-40 border rounded-full"
      />
      <div className="flex flex-col pl-2 sm:p-8">
        <div className="text-[11px] font-[500] sm:text-4xl sm:pb-3 text-s-h">
          {name}
        </div>
        <div className="text-[10px] sm:text-3xl">{bio}</div>
        <div className="border-b-2 sm:border-b-4 border-s-h w-10  sm:w-[136px] mt-1 sm:mt-5" />
      </div>
    </div>
  )
}

MemberCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  bio: PropTypes.string
}

export default MemberCard
