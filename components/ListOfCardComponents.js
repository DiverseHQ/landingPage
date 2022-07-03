import React from 'react'
import CardComponent from './CardComponent'

const cardContents = [
    {
        title: "Sharing is Earning",
        logo: "/ideaHandIcon.png",
        description: "Creating a positive sum game for everyone and rewarding users for posting their content"
    },
    {
        title: "Create Community",
        logo: "/conectivityIcon.png",
        description: "Develop a niche community.Deep dive into things and promote with those who have similar interests."
    },
    {
        title: "Make your content discoverable",
        logo: "/contentPageIcon.png",
        description: "Make your content discoverable using the power of community."
    },
    {
        title: "Something for everyone",
        logo: "/peopleIcon.png",
        description: "The primary goal is to assist independent artists, creators, builders, and journalists in sharing their work and receiving recognition in tokens."
    }
]

const ListOfCardComponents = () => {
  return (
    <div className='flex flex-row flex-wrap w-screen items-center justify-center'>{cardContents.map((card,index) => {
        return <CardComponent key={index} card={card} />
    })}</div>
  )
}

export default ListOfCardComponents