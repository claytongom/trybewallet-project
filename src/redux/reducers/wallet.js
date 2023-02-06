import { SEND_CURRENCIES, ADD_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SEND_CURRENCIES:
    return {
      ...state,
      currencies: action.currencies,
    };

  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.expense],
    };

  default:
    return state;
  }
};
export default wallet;
