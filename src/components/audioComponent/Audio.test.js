import { render,screen } from "@testing-library/react"
import Audio from "./Audio"

test('should render Audio Component', () => { 
  render(<Audio/>)
  const element = screen.getByTestId('audio').querySelector(".audio-title");
  expect(element).toHaveTextContent('Audio')
})