import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../redux/actions';

class Login extends Component {
  state = {
    email: '',
    password: '',
    btnDisabled: true,
  };

  validateLogin = () => {
    const { email, password } = this.state;
    const minimumPasswordLength = 6;
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const passwordRegex = password.length >= minimumPasswordLength;
    this.setState({
      btnDisabled: !(emailRegex.test(email) && passwordRegex),
    });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => this.validateLogin());
  };

  handleClick = () => {
    const { dispatch, history } = this.props;
    const { email } = this.state;
    dispatch(userLogin(email));
    history.push('/carteira');
  };

  render() {
    const { password, btnDisabled } = this.state;
    return (
      <div>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            data-testid="email-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            name="password"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          disabled={ btnDisabled }
          data-testid="login-submit-btn"
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect()(Login);
