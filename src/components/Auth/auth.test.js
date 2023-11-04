import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { Login } from './Login';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import { BrowserRouter } from 'react-router-dom';
afterEach(cleanup);
describe('<Auth />', () => {
  describe('Sign In', () => {
    test('renders signin component', () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Login />
          </Provider>
        </BrowserRouter>,
      );
      expect(
        screen.getByRole('button', { name: /Sign in/i }),
      ).toBeInTheDocument();
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
      expect(
        screen.getByRole('button', { name: /Sign up/i }),
      ).toBeInTheDocument();
    });
    test('renders signin component with 2 textboxes only', () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Login />
          </Provider>
        </BrowserRouter>,
      );
      expect(screen.getAllByRole('textbox').length).toEqual(2);
    });
    test('renders signin component with email input field', () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Login />
          </Provider>
        </BrowserRouter>,
      );
      expect(screen.getByTestId('email')).toBeInTheDocument();
    });
    test('renders signin component with password input field', () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Login />
          </Provider>
        </BrowserRouter>,
      );
      expect(screen.getByTestId('password')).toBeInTheDocument();
    });
    test('renders signin component with without fullname input field', () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Login />
          </Provider>
        </BrowserRouter>,
      );
      expect(screen.queryByTestId('fullname')).toBeFalsy();
    });
  });
  describe('Sign up', () => {
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
      expect(
        screen.getByRole('button', { name: /Sign up/i }),
      ).toBeInTheDocument();
    });
    test('renders signup component with 3 input fileds', () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Login />
          </Provider>
        </BrowserRouter>,
      );
      const toggler = screen.getByTestId('authToggle');
      fireEvent.click(toggler);
      expect(screen.getAllByRole('textbox').length).toEqual(3);
    });
    test('renders signup component with email input field', () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Login />
          </Provider>
        </BrowserRouter>,
      );
      const toggler = screen.getByTestId('authToggle');
      fireEvent.click(toggler);
      expect(screen.getByTestId('email')).toBeInTheDocument();
    });
    test('renders signup component with password input field', () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Login />
          </Provider>
        </BrowserRouter>,
      );
      const toggler = screen.getByTestId('authToggle');
      fireEvent.click(toggler);
      expect(screen.getByTestId('password')).toBeInTheDocument();
    });
    test('renders signup component with fullname input field', () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Login />
          </Provider>
        </BrowserRouter>,
      );
      const toggler = screen.getByTestId('authToggle');
      fireEvent.click(toggler);
      expect(screen.getByTestId('fullname')).toBeInTheDocument();
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
      expect(
        screen.getByRole('button', { name: /Sign in/i }),
      ).toBeInTheDocument();
    });
  });
});
