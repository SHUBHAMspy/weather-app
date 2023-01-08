
import './App.css';
import AirQuality from './components/airQuality/AirQuality';
import Audio from './components/audioComponent/Audio';
import Temperature from './components/temperature/Temperature';

function App() {
  return (
    <div className="container">
      <AirQuality/>
      <Temperature/>
      <Audio/>
    </div>
  );
}

export default App;
