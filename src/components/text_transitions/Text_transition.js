import { useState, useEffect } from 'react'
import './Text_transition.css'

function TextTransition () {
  const [text, setText] = useState('Web Developer')
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    let interval = setInterval(() => {
      if (text.length === displayedText.length) {
        clearInterval(interval)
        setTimeout(() => {
          setDisplayedText('')
        }, 3000)
      } else {
        setDisplayedText(displayedText + text[displayedText.length])
      }
    }, 100)
    return () => clearInterval(interval)
  }, [text, displayedText])

  return (
    <div>
      <div className='text-transition'>{displayedText}</div>
        
    </div>
  )
}

export default TextTransition
