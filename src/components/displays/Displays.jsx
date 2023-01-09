import React from 'react'
import './style.css'

const Displays = () => {
  const displaysData={
    "current":10,
    "time": "00:00",
    "total": 16
  }
  return (
    <div className='displays-container '>
      <span className='displays-title'>Displays</span>
      <div className='displays-info'>
        <div className='current-total'>
          <div className='current-displays'>{displaysData.current} </div>
          <span className='display-total' >/{displaysData.total}</span>
        </div>
        
        
        <div className='total'>
          <span className='total-text'>On Time</span>
          <div className='total-number'>{displaysData.time}</div> 
        </div>
      </div>
      
    </div>
  )
}

export default Displays