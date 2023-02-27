import { render, screen } from '@testing-library/react';
import App from './App';

// Test case for Delayed Route Widget loading properly
test('Delayed Route Widget loads successfully', async () => {
  render(<App/>);
  const widgetElement = await screen.findByTestId('delayedRouteWidget');
  expect(widgetElement).toBeInTheDocument();
})

// Test case for Widget Title loading properly
test('renders Delayed Route title', () => {
  render(<App />);
  const routeTitle = screen.getByText(/DELAYED ROUTES/i);
  expect(routeTitle).toBeInTheDocument();
});

// Test cases for Icons loading properly
test('renders arrow Icon successfully', async ()=>{
  render(<App/>)
  const arrowIcon = await screen.findAllByTestId('arrowIcon');
  expect(arrowIcon).toBeDefined();
})
test('renders circle icon representing traffic level successfully', async ()=>{
  render(<App/>)
  const circleIcon = await screen.findAllByTestId('circle');
  expect(circleIcon).toBeDefined();
})

//Test cases for content loading properly
test('Route is loaded successfully', () => {
  render(<App/>);
  const route = screen.getByText(/Western Ring Rd/i);
  expect(route).toBeInTheDocument();
})
test('Subroute is loaded successfully', () => {
  render(<App/>);
  const route = screen.getByText(/Hoddle St/i);
  expect(route).toBeInTheDocument();
})
test('Route time is loaded successfully', () => {
  render(<App/>);
  const route = screen.getByText(/25/);
  expect(route).toBeInTheDocument();
})
test('Route distance is loaded successfully', () => {
  render(<App/>);
  const route = screen.getByText(/13km/);
  expect(route).toBeInTheDocument();
})

