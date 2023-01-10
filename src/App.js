
import './App.css';
import AirQuality from './components/airQuality/AirQuality';
import Audio from './components/audioComponent/Audio';
import Temperature from './components/temperature/Temperature';
import Lighting from './components/lighting/Lighting';
import Displays from './components/displays/Displays';
import Logo from './components/logo/Logo';

function App() {
  return (
    <>
      <Logo/>
      <div className="container"data-testid='flex-container' >
        <AirQuality/>
        <Temperature/>
        <Audio/>
        <Lighting/>
        <Displays/>
        {/* <div style={{
           "width": "15rem",
           "height": "10rem",
           "backgroundColor": "gray"
        }} ></div>
        <div style={{
           "width": "15rem",
           "height": "10rem",
           "backgroundColor": "gray"
        }} ></div>
        <div style={{
           "width": "15rem",
           "height": "10rem",
           "backgroundColor": "gray"
        }} ></div> */}
      </div>
    </>
  );
}

export default App;
