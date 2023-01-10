import AirQuality from "./AirQuality";
import { render, screen } from '@testing-library/react';

test('rendering of air quality',() => {
  render(<AirQuality />);
  const element = screen.getByTestId('air-quality').querySelector(".airQuality-title");
  expect(element).toHaveTextContent('Air Quality')

})

// test('green circle',() => {
//   render(<AirQuality />);
//   const {type} = screen.getByTestId('air-quality').querySelector(".current-quality");
//   console.log(type);
//   // expect(element).tohaveC
// })