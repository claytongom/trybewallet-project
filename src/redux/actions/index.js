import getCurrency from '../../services/API';

export const USER_LOGIN = 'USER_LOGIN';
export const SEND_CURRENCIES = 'SEND_CURRENCIES';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const userLogin = (payload) => ({
  type: USER_LOGIN,
  email: payload,
});

export const sendCurrencies = (payload) => ({
  type: SEND_CURRENCIES,
  currencies: payload,
});

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  expense: payload,
});

export const fetchCurrencies = () => async (dispatch) => {
  const currencies = await getCurrency();
  dispatch(sendCurrencies(currencies));
};
