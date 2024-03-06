import {useState, useEffect} from 'react'

import './typing.css'

function TypingText({text, speed}) {
  const [useDisplayType, setDisplaySpeed] = useState('')

  const textColor = {
    r: 255,
    g: 255,
    b: 225,
  }
  const textStyle = {
    color: `rgb(${textColor.r}, ${textColor.g}, ${textColor.b})`,
  }

  useEffect(() => {
    let currentIndex = 0
    const intervalList = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplaySpeed(text.slice(0, currentIndex))
        currentIndex += 1
      } else {
        clearInterval(intervalList)
      }
    }, speed)
    return () => clearInterval(intervalList)
  }, [text, speed])

  return (
    <div className="StyleText" style={textStyle}>
      {useDisplayType}
    </div>
  )
}

export default TypingText
