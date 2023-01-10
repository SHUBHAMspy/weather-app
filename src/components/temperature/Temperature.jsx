import React from 'react'
import Fire from '../../assets/images/fire.svg'
import Snow from '../../assets/images/snowflake.svg'
import './style.css'

const Temperature = () => {
  const temperatureData={
    "currentTemp":21,
    "highest":26,
    "lowest":18
  }
  return (
    <div className='temperature-container' data-testid='temperature-widget'>
      <span className='temperature-title'>Temperature</span>
      <div className='info-container'>
        <div className='current-temperature'>
          <div>
            <span>{temperatureData.currentTemp}</span><span  style={{"marginTop":"1.2rem"}}className='celcius'>&#8451;</span>
          </div>
        </div>
        <div className='ranges'>
          <div className='high'>
            <img src={Fire} alt="" />
            <div>
              <span style={{"fontSize": "var(--fs-0)" }}>{temperatureData.highest}</span>
              <span className='celcius'>&#8451;</span>
            </div>
          </div>
          <div className='low'>
            <img src={Snow} alt="" />
            <div>
              <span style={{"fontSize": "var(--fs-0)" }}>{temperatureData.lowest}</span>
              <span className='celcius'>&#8451;</span>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Temperature