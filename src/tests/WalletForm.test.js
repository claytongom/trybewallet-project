import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Wallet from '../pages/Wallet';
import mockData from './helpers/mockData';

describe('Verifica a pagina Wallet', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({ json: () => Promise.resolve(mockData),
    }));
  });

  it('Verifica se os campos estão na tela', async () => {
    renderWithRouterAndRedux(<Wallet />);

    const value = screen.getByTestId('value-input');
    const currency = screen.getByTestId('currency-input');
    const method = screen.getByTestId('method-input');
    const tag = screen.getByTestId('tag-input');
    const description = screen.getByTestId('description-input');
    const button = screen.getByText('Adicionar despesa');
    expect(value).toBeInTheDocument();
    expect(currency).toBeInTheDocument();
    expect(method).toBeInTheDocument();
    expect(tag).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    userEvent.click(value);
    userEvent.click(currency);
    userEvent.click(method);
    userEvent.click(tag);
    userEvent.click(description);
    userEvent.click(button);
  });
});
