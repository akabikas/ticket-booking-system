import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginUser from '../pages/login';

describe('LoginUser', () => {
  test('renders email input correctly', () => {
    const { getByPlaceholderText } = render(<LoginUser />);
    const emailInput = getByPlaceholderText('Enter your email');
    expect(emailInput).toBeInTheDocument();
  });

  test('renders password input correctly', () => {
    const { getByPlaceholderText } = render(<LoginUser />);
    const passwordInput = getByPlaceholderText('Enter your password');
    expect(passwordInput).toBeInTheDocument();
  });


  test('renders remember me checkbox correctly', () => {
    const { getByLabelText } = render(<LoginUser />);
    const rememberCheckbox = getByLabelText('Remember me');
    expect(rememberCheckbox).toBeInTheDocument();
  });

  test('renders Login button correctly', () => {
    const { queryAllByText } = render(<LoginUser />);
    const loginButton = queryAllByText('Login');
    expect(loginButton).toEqual(expect.arrayContaining([expect.anything()]));
  });

  test('renders register link correctly', () => {
    const { getByText } = render(<LoginUser />);
    const registerLink = getByText('New member?');
    expect(registerLink).toBeInTheDocument();
  });

});
