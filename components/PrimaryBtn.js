import React from 'react'

const PrimaryBtn = ({text,onClick,style,isLoading}) => {
  return (
      <>
    {<button onClick={onClick} disabled={isLoading} className="px-5 py-3 rounded-2xl bg-purple-300 text-white hover:bg-purple-600 hover:rounded-xl ease-in-out duration-500 text-center flex flex-row justify-center items-center" style={style}>
        {isLoading ? "processing.." : text}</button>}
  </>
  )
}

export default PrimaryBtn