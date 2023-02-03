import getCurrency from '../../services/API';

export const USER_LOGIN = 'USER_LOGIN';
export const SEND_CURRENCIES = 'SEND_CURRENCIES';

export const userLogin = (payload) => ({
  type: USER_LOGIN,
  email: payload.email,
});

export const sendCurrencies = (payload) => ({
  type: SEND_CURRENCIES,
  currencies: payload,
});

export const fetchCurrencies = () => async (dispatch) => {
  const currencies = await getCurrency();
  dispatch(sendCurrencies(currencies));
};
