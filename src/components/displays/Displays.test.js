import { render,screen } from "@testing-library/react"
import Displays from "./Displays";

test('should render Displays Component', () => { 
  render(<Displays/>)
  const element = screen.getByTestId('display-widget').querySelector(".displays-title");
  expect(element).toHaveTextContent('Displays')
})