import React from 'react'
import './style.css'

const Audio = () => {
  const audioData={
    "current":2,
    "status": "PLAYING",
    "total": 5
  }
  return (
    <div className='audio-container'>
      <span className='audio-title'>Audio</span>
      <div className='audio-info'>
        <div className='current'>{audioData.current}</div>
        <div className='status'>{audioData.status}</div>
        <div className='total'>
          <span className='total-text'>Total</span>
          <div className='total-number'>{audioData.total}</div> 

        </div>
      </div>
      
    </div>
  )
}

export default Audio