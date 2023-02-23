import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';
import mockData from './helpers/mockData';

describe('Verifica a pagina Header', () => {
  it('Verifica se ao adicionar uma despesa o total é atualizado', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });
    renderWithRouterAndRedux(<App />);
    const btn = screen.getByRole('button');
    userEvent.click(btn);
    const value = screen.getByTestId('value-input');
    const currency = screen.getByTestId('currency-input');
    const method = screen.getByTestId('method-input');
    const tag = screen.getByTestId('tag-input');
    const description = screen.getByTestId('description-input');
    const button = screen.getByText('Adicionar despesa');
    userEvent.type(value, '10');
    userEvent.type(currency, 'USD');
    userEvent.type(method, 'Dinheiro');
    userEvent.type(tag, 'Alimentação');
    userEvent.type(description, 'Comida');
    userEvent.click(button);
    const total = screen.getByTestId('total-field');
    expect(total).toHaveTextContent('0');
  });
});
