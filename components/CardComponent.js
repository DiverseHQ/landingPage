import Image from 'next/image'
import PropTypes from 'prop-types'
import React from 'react'

const CardComponent = ({ card }) => {
  return (
    <div className='w-[450px] h-[350px] p-6 m-3 rounded-3xl border-8 border-purple-300'>
        <div className='flex flex-row justify-between items-center'>
            <div className="pl-3">
                <Image width={50} height={50} src={card.logo} alt={card.title} />
            </div>
            <div className='text-3xl font-bold'>
                {card.title}
            </div>
            </div>
            <div className='w-full pl-3 pt-6  text-2xl  text-center sm:text-left leading-7 sm:leading-10 text-slate-700  h-full'>
                {card.description}
                </div>
    </div>
  )
}

CardComponent.propTypes = {
  card: PropTypes.object.isRequired
}

export default CardComponent
