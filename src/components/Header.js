import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  state = {
    total: 0,
  };

  componentDidUpdate(prevProps) {
    const { expenses } = this.props;
    if (prevProps.expenses !== expenses) {
      this.setState({ total: this.sumExpenses() });
    }
  }

  sumExpenses = () => {
    const { expenses } = this.props;
    return expenses.reduce((acc, curr) => {
      const { value, exchangeRates, currency } = curr;
      const { ask } = exchangeRates[currency];
      return acc + Number(value) * Number(ask);
    }, 0);
  };

  render() {
    const { email } = this.props;
    const { total } = this.state;
    return (
      <header>
        <h3 data-testid="email-field">
          { `Email: ${email}` }
        </h3>
        <h3 data-testid="total-field">{ total.toFixed(2) }</h3>
        <h3 data-testid="header-currency-field">
          BRL
        </h3>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default connect(mapStateToProps)(Header);
