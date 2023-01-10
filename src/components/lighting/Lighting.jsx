import React from 'react'
import './style.css'

const Lighting = () => {
  const lightingData={
    "current":32,
    "status": "ON",
    "total": 43
  }
  return (
    <div className='lighting-container ' data-testid='lighting-widget'>
      <span className='lighting-title'>Lighting</span>
      <div className='lighting-info'>
        <div className='current'>{lightingData.current}</div>
        <div className='lighting-status'>{lightingData.status}</div>
        <div className='total'>
          <span className='total-text'>Total</span>
          <div className='total-number'>{lightingData.total}</div> 

        </div>
      </div>
      
    </div>
  )
}

export default Lighting