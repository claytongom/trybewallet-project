import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import WalletForm from '../components/WalletForm';

describe('Verifica pagaina WalletForm', () => {
  it('Testa se os titulos dos campos são renderizados ', () => {
    renderWithRouterAndRedux(<WalletForm />);

    const valueExpense = screen.getByText('Valor da despesa:');
    const descriptionExpense = screen.getByText('Descrição da despesa:');
    const currencyExpense = screen.getByText('Moeda:');
    const methodExpense = screen.getByText('Método de pagamento:');
    const tagExpense = screen.getByText('Tag:');
    const btnAddExpense = screen.getByText('Adicionar despesa');
    expect(valueExpense).toBeInTheDocument();
    expect(descriptionExpense).toBeInTheDocument();
    expect(currencyExpense).toBeInTheDocument();
    expect(methodExpense).toBeInTheDocument();
    expect(tagExpense).toBeInTheDocument();
    expect(btnAddExpense).toBeInTheDocument();
  });
});
