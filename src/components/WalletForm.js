import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies, addExpense } from '../redux/actions';
import { getCurrencyAll } from '../services/API';

class WalletForm extends Component {
  state = {
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    id: 0,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrencies());
  }

  handleChange = ({ target: { id, value } }) => {
    this.setState({
      [id]: value,
    });
  };

  handleSubmit = async () => {
    const {
      value,
      description,
      currency,
      method,
      tag,
      id,
    } = this.state;

    const data = await getCurrencyAll();

    const newExpense = {
      value,
      description,
      currency,
      method,
      tag,
      id,
      exchangeRates: data,
    };

    const { dispatch } = this.props;
    dispatch(addExpense(newExpense));
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      id: id + 1,
    });
  };

  render() {
    const { currencies } = this.props;
    const {
      value,
      description,
      currency,
      method,
      tag,
    } = this.state;

    return (
      <form>
        <div>
          <label htmlFor="value">
            Valor:
            <input
              type="text"
              id="value"
              value={ value }
              data-testid="value-input"
              onChange={ this.handleChange }

            />
          </label>
          <label htmlFor="description">
            Descrição:
            <input
              type="text"
              id="description"
              value={ description }
              data-testid="description-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="currency">
            Moeda
            <select
              id="currency"
              data-testid="currency-input"
              value={ currency }
              onChange={ this.handleChange }
            >
              {currencies.map((curr) => (
                <option key={ curr } value={ curr }>
                  { curr }
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento:
            <select
              id="method"
              value={ method }
              data-testid="method-input"
              onChange={ this.handleChange }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select
              id="tag"
              value={ tag }
              data-testid="tag-input"
              onChange={ this.handleChange }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <button
            type="button"
            data-testid="button-add"
            onClick={ this.handleSubmit }
          >
            Adicionar despesa
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
});

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(WalletForm);
