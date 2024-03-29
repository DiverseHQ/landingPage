import { useEffect, useState } from 'react'

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  })
  const [isMobile, setIsMobile] = useState(false)

  const handleResize = () => {
    // Set window width/height to state
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    })
    if (window.innerWidth < 768) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }
  useEffect(() => {
    // Add event listener
    window.addEventListener('resize', handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return { windowSize, isMobile }
}
export default useWindowSize
