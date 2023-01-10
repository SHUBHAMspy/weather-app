import { render,screen } from "@testing-library/react"
import Temperature from "./Temperature";

test('should render Temperature Component', () => { 
  render(<Temperature/>)
  const element = screen.getByTestId('temperature-widget').querySelector(".temperature-title");
  expect(element).toHaveTextContent('Temperature')
})