import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RegisterUser from '../pages/register';

describe('RegisterUser', () => {
  test('renders email input correctly', () => {
    const { getByPlaceholderText } = render(<RegisterUser />);
    const emailInput = getByPlaceholderText('Enter your email');
    expect(emailInput).toBeInTheDocument();
  });

  test('renders password input correctly', () => {
    const { getByPlaceholderText } = render(<RegisterUser />);
    const passwordInput = getByPlaceholderText('Enter your password');
    expect(passwordInput).toBeInTheDocument();
  });

  test('renders confirm password input correctly', () => {
    const { getByPlaceholderText } = render(<RegisterUser />);
    const confirmPasswordInput = getByPlaceholderText('Confirm your password');
    expect(confirmPasswordInput).toBeInTheDocument();
  });

  test('renders terms and conditions checkbox correctly', () => {
    const { getByLabelText } = render(<RegisterUser />);
    const termsCheckbox = getByLabelText('I agree to terms and conditions');
    expect(termsCheckbox).toBeInTheDocument();
  });

  test('renders register button correctly', () => {
    const { queryAllByText } = render(<RegisterUser />);
    const registerButton = queryAllByText('Register');
    expect(registerButton).toEqual(expect.arrayContaining([expect.anything()]));
  });

  test('renders login link correctly', () => {
    const { getByText } = render(<RegisterUser />);
    const loginLink = getByText('Already have an account?');
    expect(loginLink).toBeInTheDocument();
  });

});
