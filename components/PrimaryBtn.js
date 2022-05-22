import React from 'react'

const PrimaryBtn = ({text,onClick}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

export default PrimaryBtn