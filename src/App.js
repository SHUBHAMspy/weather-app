
import './App.css';
import AirQuality from './components/airQuality/AirQuality';
import Temperature from './components/temperature/Temperature';

function App() {
  return (
    <div className="container">
      <AirQuality/>
      <Temperature/>
    </div>
  );
}

export default App;
