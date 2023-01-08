import React from 'react'
import { faArrowDown, faArrowDownLong, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'
const AirQuality = () => {
  const airQualityData = {
    "current":72,
    "max":93,
    "min":61
  }
  return (
    <div className='airQuality-container'>
      <span className='airQuality-title'>Air Quality</span>
      <div className='info-container'>
        <span className='current-quality'>{airQualityData.current}</span>
        <div className='ranges'>
          <div className='max' >
            <FontAwesomeIcon 
              icon={faArrowUp} 
              style={{
                "color": "var(--green)",
                "marginTop":"4px"
              }}
            />
            <span  style={{"fontSize": "var(--fs-0)" }} >{airQualityData.max}</span>
          </div>
          <div className='min'>
            <FontAwesomeIcon 
              icon={faArrowDown} 
              style={{
                "color":"#ffa751",
                "marginTop":"5px"
              }}  
            />
            <span style={{"fontSize": "var(--fs-0)" }}>{airQualityData.min}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AirQuality