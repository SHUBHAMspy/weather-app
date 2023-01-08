
import './App.css';
import AirQuality from './components/airQuality/AirQuality';
import Audio from './components/audioComponent/Audio';
import Temperature from './components/temperature/Temperature';
import Lighting from './lighting/Lighting';

function App() {
  return (
    <div className="container">
      <AirQuality/>
      <Temperature/>
      <Audio/>
      <Lighting/>
    </div>
  );
}

export default App;
