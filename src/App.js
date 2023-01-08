
import './App.css';
import AirQuality from './components/airQuality/AirQuality';
import Audio from './components/audioComponent/Audio';
import Temperature from './components/temperature/Temperature';
import Lighting from './components/lighting/Lighting';
import Displays from './components/displays/Displays';

function App() {
  return (
    <div className="container">
      <AirQuality/>
      <Temperature/>
      <Audio/>
      <Lighting/>
      <Displays/>
    </div>
  );
}

export default App;
