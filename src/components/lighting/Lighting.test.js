import { render,screen } from "@testing-library/react"
import Lighting from "./Lighting";


test('should render Lighting Component', () => { 
  render(<Lighting/>)
  const element = screen.getByTestId('lighting-widget').querySelector(".lighting-title");
  expect(element).toHaveTextContent('Lighting')
})