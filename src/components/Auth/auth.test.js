import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { Login } from './Login';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import { BrowserRouter } from 'react-router-dom';
afterEach(cleanup);
test('renders signin component', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Login />
      </Provider>
    </BrowserRouter>,
  );
  expect(screen.getByRole('button', { name: 'Sign in' })).toBeInTheDocument();
});
test('renders signup component when click on toggler link', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Login />
      </Provider>
    </BrowserRouter>,
  );
  const toggler = screen.getByTestId('authToggle');
  fireEvent.click(toggler);
  expect(screen.getByRole('button', { name: 'Sign up' })).toBeInTheDocument();
});
test('renders signin component when click on toggler link', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Login />
      </Provider>
    </BrowserRouter>,
  );
  const toggler = screen.getByTestId('authToggle');
  fireEvent.click(toggler);
  fireEvent.click(toggler);
  expect(screen.getByRole('button', { name: 'Sign in' })).toBeInTheDocument();
});

