import React, { useRef, useState } from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import SwiperCore, { Autoplay } from 'swiper'

import 'swiper/swiper.min.css'
import SwiperCard from './SwiperCard'
// import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'

let startX = 0
let scrollLeft = 0

const NewFeaturesSection = () => {
  const [mouseDown, setMouseDown] = useState(false)
  const ref = useRef()
  const handleMouseDown = (e) => {
    setMouseDown(true)
    startX = e.pageX - ref.current.offsetLeft
    scrollLeft = ref.current.scrollLeft
    // setMouseDown(true)
    // setStartX(e.pageX - e.target.offsetLeft)
    // setScrollLeft(e.target.scrollLeft)
  }
  const handleMouseLeave = () => {
    // mouseDown = false
    setMouseDown(false)
  }
  const handleMouseUp = () => {
    // mouseDown = false
    setMouseDown(false)
  }
  const handleMouseMove = (e) => {
    if (!mouseDown) return
    e.preventDefault()
    const x = e.pageX - ref.current.offsetLeft
    const walk = x - startX
    ref.current.scrollLeft = scrollLeft - walk
  }
  // const [swiper, setSwiper] = useState(null)
  // SwiperCore.use([Autoplay])
  const data = [
    {
      title: 'Levitating Lens',
      description:
        'We use the most popular and amazing decentralized social graph. Lens will keep your followers,follows and posts on the blockchain.',
      ImageComp: () => (
        <svg
          width="150"
          height="150"
          viewBox="0 0 54 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_876_1616)">
            <path
              d="M0.642578 78.8548V61.9927H2.66596V77.0243H11.4691V78.8548H0.642578Z"
              fill="#00501E"
            ></path>
            <path
              d="M13.5244 78.8548V61.9927H23.907V63.8232H15.5478V69.4639H22.3221V71.2944H15.5478V77.028H24.0271V78.8585L13.5244 78.8548Z"
              fill="#00501E"
            ></path>
            <path
              d="M26.002 78.8548V61.9927H30.2925L36.1698 77.5793H36.8467V61.9927H38.8483V78.8548H34.5559L28.7022 63.2482H28.0017V78.8566L26.002 78.8548Z"
              fill="#00501E"
            ></path>
            <path
              d="M47.4075 79.1912C46.282 79.2101 45.1654 78.9886 44.1323 78.5416C43.1943 78.1295 42.4014 77.4456 41.856 76.5783C41.3028 75.7025 41.0256 74.6065 41.0244 73.2903V72.7845H43.026V73.2903C43.026 74.6878 43.4354 75.7273 44.2542 76.4091C45.073 77.0908 46.1241 77.4347 47.4075 77.4408C48.7237 77.4408 49.7269 77.1436 50.4171 76.5492C50.748 76.2785 51.0132 75.9362 51.1929 75.5483C51.3725 75.1603 51.4619 74.7367 51.4543 74.3093C51.4833 73.7707 51.3158 73.2399 50.983 72.8154C50.625 72.4113 50.175 72.0993 49.6711 71.9056C49.033 71.6481 48.3752 71.4424 47.7041 71.2906L46.4523 70.9776C45.5561 70.7512 44.6845 70.4367 43.8502 70.0387C43.1461 69.7117 42.5368 69.2107 42.0798 68.583C41.654 67.9765 41.4411 67.2014 41.4411 66.2576C41.4192 65.385 41.6677 64.527 42.1526 63.8011C42.6525 63.0892 43.3476 62.5369 44.1541 62.2108C45.0982 61.828 46.1106 61.6423 47.1291 61.6649C48.1826 61.6481 49.2282 61.8488 50.2006 62.2545C51.0604 62.6144 51.8 63.2114 52.3332 63.9758C52.856 64.74 53.1168 65.6996 53.1156 66.8544V67.8661H51.114V66.8544C51.114 66.0356 50.9418 65.3775 50.5973 64.8802C50.2455 64.3765 49.7504 63.9904 49.1762 63.772C48.5192 63.5199 47.82 63.3964 47.1164 63.4081C46.0089 63.4081 45.1173 63.6507 44.4416 64.1359C43.7659 64.6212 43.4287 65.3156 43.4299 66.2194C43.4062 66.7361 43.5589 67.2456 43.863 67.6641C44.1903 68.0656 44.6133 68.3784 45.093 68.5739C45.7071 68.8351 46.3435 69.0403 46.9945 69.1871L48.2482 69.5019C49.1565 69.6866 50.041 69.9735 50.8848 70.3571C51.62 70.6829 52.2618 71.1878 52.7517 71.8255C53.2175 72.4442 53.4504 73.2515 53.4504 74.2474C53.4711 75.1697 53.211 76.0766 52.7044 76.8476C52.1783 77.609 51.4479 78.2063 50.5973 78.5708C49.5902 79.002 48.5028 79.2135 47.4075 79.1912Z"
              fill="#00501E"
            ></path>
            <path
              d="M27.0645 39.9117C26.5296 39.9117 13.8343 39.8007 4.12313 30.0859C3.91751 29.8821 3.71736 29.6747 3.52084 29.4673C1.48654 27.3238 0.522155 24.7727 0.725949 22.0925C0.907908 19.727 1.99966 17.4361 3.79196 15.6384C5.58426 13.8406 7.8824 12.7525 10.246 12.5724C12.7225 12.3904 15.0898 13.1947 17.1296 14.9233C17.3497 12.2594 18.4488 10.0104 20.3339 8.39458C22.1334 6.84974 24.5189 6 27.0664 6C29.6138 6 31.9993 6.84974 33.7988 8.39458C35.6821 10.0122 36.783 12.2594 37.0031 14.9233C39.0429 13.1947 41.4102 12.3758 43.8866 12.5724C46.2521 12.7543 48.543 13.8461 50.3389 15.6384C52.1349 17.4307 53.2266 19.7288 53.4049 22.0925C53.6105 24.7727 52.6443 27.3238 50.6119 29.4709C50.4153 29.6783 50.2152 29.8858 50.0096 30.0896C40.2966 39.8007 27.6013 39.9117 27.0645 39.9117ZM10.9484 14.5612C8.74671 14.5612 6.67965 15.5856 5.20942 17.054C2.56737 19.6979 1.36645 24.2796 4.97651 28.0953C5.1609 28.2906 5.34892 28.4841 5.54059 28.6757C14.6713 37.8046 26.9444 37.9102 27.0664 37.9102C27.1883 37.9102 39.4869 37.7828 48.5939 28.6757C48.7868 28.4829 48.9748 28.2894 49.158 28.0953C52.7681 24.2742 51.5671 19.6979 48.9251 17.054C46.2831 14.4101 41.6995 13.2092 37.8784 16.8211C37.6831 17.0043 37.4896 17.1923 37.2979 17.3852C37.1505 17.5326 37.0068 17.6836 36.8648 17.8346L34.967 19.8471L35.0416 17.0849C35.0416 16.8739 35.0544 16.6646 35.0544 16.4517C35.0544 16.1788 35.0544 15.9059 35.0434 15.642C34.8979 10.3925 30.8092 7.99973 27.07 7.99973C23.3307 7.99973 19.2457 10.3907 19.0984 15.642C19.0984 15.9095 19.0874 16.1879 19.0874 16.4517C19.0874 16.6592 19.0874 16.863 19.0984 17.0686L19.173 19.8471L17.2733 17.8455C17.1296 17.6927 16.984 17.5398 16.8348 17.3888C16.6419 17.1959 16.4484 17.0079 16.2543 16.8247C14.553 15.2108 12.7061 14.5612 10.9484 14.5612Z"
              fill="#00501E"
            ></path>
            <path
              d="M25.7818 29.3107H24.3261C24.3261 27.1435 22.2154 25.3785 19.6243 25.3785C17.0332 25.3785 14.9225 27.1435 14.9225 29.3107H13.4668C13.4668 26.3393 16.2289 23.9229 19.6243 23.9229C23.0196 23.9229 25.7818 26.3393 25.7818 29.3107Z"
              fill="#00501E"
            ></path>
            <path
              d="M40.5826 29.2507H39.1269C39.1269 27.0836 37.018 25.3204 34.4251 25.3204C31.8322 25.3204 29.7233 27.0836 29.7233 29.2507H28.2676C28.2676 26.2812 31.0297 23.8647 34.4251 23.8647C37.8204 23.8647 40.5826 26.2812 40.5826 29.2507Z"
              fill="#00501E"
            ></path>
            <path
              d="M21.3004 29.3415C22.4571 29.3415 23.3948 28.4039 23.3948 27.2472C23.3948 26.0905 22.4571 25.1528 21.3004 25.1528C20.1437 25.1528 19.2061 26.0905 19.2061 27.2472C19.2061 28.4039 20.1437 29.3415 21.3004 29.3415Z"
              fill="#00501E"
            ></path>
            <path
              d="M36.0026 29.3415C37.1592 29.3415 38.0969 28.4039 38.0969 27.2472C38.0969 26.0905 37.1592 25.1528 36.0026 25.1528C34.8459 25.1528 33.9082 26.0905 33.9082 27.2472C33.9082 28.4039 34.8459 29.3415 36.0026 29.3415Z"
              fill="#00501E"
            ></path>
            <path
              d="M27.0593 34.662C25.3435 34.662 23.7531 33.7795 23.0107 32.4148L24.2845 31.7197C24.7776 32.6295 25.8639 33.2063 27.0557 33.2063C28.2475 33.2063 29.3356 32.6222 29.8269 31.7197L31.1006 32.4148C30.3655 33.7795 28.7807 34.662 27.0593 34.662Z"
              fill="#00501E"
            ></path>
            <path
              d="M53.1469 54.8398C49.4993 56.5478 45.3877 56.9958 41.4578 56.1135C38.205 55.3923 35.2188 53.7757 32.8366 51.4463C34.3447 52.0713 35.9624 52.3892 37.5948 52.3816C40.4174 52.3822 43.1703 51.5046 45.4718 49.8705L44.3037 48.2438C41.154 50.511 36.8215 51.0569 33.4025 49.5121C30.029 47.9927 28.1257 44.7411 28.0038 40.3322V38.9111H26.0022V39.1622V40.3213C25.8858 44.7356 23.9788 47.9909 20.6017 49.5121C17.1827 51.0533 12.8429 50.5147 9.70051 48.2384L8.53415 49.8651C10.8342 51.4998 13.5857 52.3786 16.4075 52.3797C18.04 52.3877 19.6577 52.0698 21.1657 51.4445C18.7842 53.7738 15.7986 55.3905 12.5463 56.1117C8.6165 56.9941 4.50486 56.5461 0.857295 54.838L0.00390625 56.6485C2.68265 57.9059 5.60593 58.5564 8.56508 58.5536C10.0519 58.5541 11.5342 58.39 12.9849 58.0641C17.4363 57.0759 21.4128 54.5879 24.2481 51.0169L24.2609 51.0005C24.9262 50.1277 25.5103 49.1958 26.0059 48.2165V58.5172H28.0074V48.2311C28.5022 49.2055 29.0845 50.1331 29.7469 51.0023L29.7597 51.0187C32.5947 54.5892 36.5705 57.0772 41.0211 58.066C42.4718 58.3918 43.9541 58.556 45.4409 58.5554C48.4007 58.5582 51.3245 57.9077 54.0039 56.6503L53.1469 54.8398Z"
              fill="#00501E"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_876_1616">
              <rect
                width="54"
                height="73.193"
                fill="white"
                transform="translate(0 6)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
      )
    },
    {
      title: 'Make Money',
      description:
        'Post anything from your ebook, illustration, 3d models, or nfts on applicable communities to  sell it. Only buyers will have access to it while your content get exposure to entire community.',
      ImageComp: () => <img src="roboMoney.png" className="w-[180px] " />
    },
    {
      title: 'Advent Actions',
      description:
        'Gamifying social Interactions. Create and join content tournaments,and get rewarded for winning. Create and participate in the Votes.',
      ImageComp: () => <img src="roboAction.png" className="w-[180px] " />
    },
    {
      title: 'Cool Communities',
      description:
        'Create and join communities of people who share your interests. Create exclusive community and let token holders post and access content.',
      ImageComp: () => <img src="roboDab.png" className="w-[180px] " />
    }
  ]
  // const handleNext = () => {
  //   if (!swiper) return
  //   swiper.slideNext()
  // }
  // const handlePrev = () => {
  //   if (!swiper) return
  //   swiper.slidePrev()
  // }
  return (
    <div
      ref={ref}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className={`flex  py-10  overflow-x-hidden relative w-full h-fit text-white bg-b-bg  rounded-t-[60px] rounded-b-[60px] sm:rounded-t-[0px] sm:rounded-b-[0px] ${
        mouseDown ? 'cursor-grabbing' : 'cursor-grab'
      }`}
    >
      {data.map((item, index) => (
        <SwiperCard
          key={index}
          title={item.title}
          description={item.description}
          ImageComp={item.ImageComp}
        />
      ))}
      {/* <Swiper
        slidesPerView={2}
        autoplay={{
          delay: 9500,
          disableOnInteraction: false,
          waitForTransition: false
        }}
        loop={true}
        style={{ width: '100%' }}
        onSwiper={(swiper) => {
          setSwiper(swiper)
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <SwiperCard
              title={item.title}
              description={item.description}
              ImageComp={item.ImageComp}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full flex flex-row justify-around mt-8">
        <button onClick={handlePrev}>
          <BsArrowLeftCircle size={40} />
        </button>
        <button onClick={handleNext}>
          <BsArrowRightCircle size={40} />
        </button>
      </div> */}
    </div>
  )
}

export default NewFeaturesSection
