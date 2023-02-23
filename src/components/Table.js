import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteExpense, editExpense } from '../redux/actions';

class Table extends Component {
  expenseEdit(id) {
    const { dispatch, expenses } = this.props;
    const expenseToEdit = expenses.find((expense) => expense.id === id);
    dispatch(editExpense(expenseToEdit));
  }

  render() {
    const { expenses, dispatch } = this.props;
    return (
      <div>
        <table>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </table>
        <tbody>
          {expenses.map(({
            id,
            value,
            description,
            currency,
            method,
            tag,
            exchangeRates,
            convertion = 'Real',
          }) => (
            <tr key={ id }>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{ exchangeRates[currency].name }</td>
              <td>{ Number(value).toFixed(2) }</td>
              <td>{ Number(exchangeRates[currency].ask).toFixed(2) }</td>
              <td>{ Number(value * exchangeRates[currency].ask).toFixed(2) }</td>
              <td>{convertion}</td>
              <td>
                <button
                  type="button"
                  id={ id }
                  data-testid="edit-btn"
                  onClick={ () => this.expenseEdit(id) }
                >
                  Editar despesa
                </button>
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => dispatch(deleteExpense(id)) }
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </div>
    );
  }
}

const mapStateToProps = ({ wallet: { expenses } }) => ({
  expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Table);
