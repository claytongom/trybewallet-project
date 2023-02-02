import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <h3 data-testid="email-field">
          { `Email: ${email}` }
        </h3>
        <h3 data-testid="total-field">
          0
        </h3>
        <h3 data-testid="header-currency-field">
          BRL
        </h3>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
