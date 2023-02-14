import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import '@testing-library/jest-dom';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('Verifica campos da pagina inicial', () => {
  const valideEmail = 'teste@email.com';
  const passValid = '123456';
  const TestIdEmail = 'email-input';
  const TestIdPass = 'password-input';

  it('Verifica campos da pagina inicial', () => {
    renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByTestId(TestIdEmail);
    const inputPass = screen.getByTestId(TestIdPass);
    expect(inputEmail).toBeInTheDocument();
    expect(inputPass).toBeInTheDocument();
    userEvent.type(inputEmail, 'teste@email.com');
    userEvent.type(inputPass, '123456');
  });

  it('Verifica se o botão habilita quando o email e senha são válidos', () => {
    renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByTestId(TestIdEmail);
    const inputPass = screen.getByTestId(TestIdPass);
    const btn = screen.getByRole('button');
    expect(btn).toBeDisabled();
    userEvent.type(inputEmail, valideEmail);
    userEvent.type(inputPass, passValid);
    expect(btn).toBeEnabled();
  });
});
