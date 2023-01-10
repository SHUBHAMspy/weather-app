import { render, screen } from '@testing-library/react';
import App from './App';

test('renders responsive flexbox container', () => {
  let {container} = render(<App />);
  
  expect(container.children[1]).toHaveClass('container');
});


