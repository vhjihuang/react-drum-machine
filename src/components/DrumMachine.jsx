import { useState, useEffect, useCallback } from 'react'

import DrumPad from './DrumPad'
import drumPads from '../data/drumPads'

const DrumMachine = () => {
  const [displayText, setDisplayText] = useState('')

  const onDrum = (id) => {
    setDisplayText(id)
  }

  const handleKeyDown = useCallback((event) => {
    const key = event.key.toUpperCase()
    const drumPad = drumPads.find(pad => pad.keyTrigger === key)
    if (drumPad) {
      const audio = document.getElementById(key)
      if (audio) {
        audio.currentTime = 0
        audio.play()
        setDisplayText(drumPad.id)
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  return (
    <div id="drum-machine">
      <div id="display">{displayText}</div>
      <div className="drum-pads-container">
        {drumPads.map((drumPad) => (
          <DrumPad
            key={drumPad.keyTrigger}
            keyTrigger={drumPad.keyTrigger}
            id={drumPad.id}
            url={drumPad.url}
            onDrum={onDrum}
          />
        ))}
      </div>
    </div>
  )
}
export default DrumMachine
