import { useState, useRef, useEffect } from 'react'

const DrumPad = ({ keyTrigger, id, url, onDrum }) => {
  const [active, setActive] = useState(false)
  const audioRef = useRef(null)
  
  const handleClick = () => {
    setActive(true)
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play()
    }
    onDrum(id)
    setTimeout(() => setActive(false), 100)
  }
  
  return (
    <div 
      className={`drum-pad ${active ? 'active' : ''}`} 
      id={id} 
      onClick={handleClick}
      role="button"
      tabIndex="0"
      aria-label={`播放 ${id} 音效`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick()
        }
      }}
    >
      {keyTrigger}
      <audio 
        ref={audioRef} 
        className="clip" 
        src={url} 
        id={keyTrigger}
      ></audio>
    </div>
  )
}

export default DrumPad
