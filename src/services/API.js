const SEND_CURRENCIES = 'https://economia.awesomeapi.com.br/json/all';

const getCurrency = async () => {
  const response = await fetch(SEND_CURRENCIES);
  const data = await response.json();
  delete data.USDT;

  return Object.keys(data);
};

export const getCurrencyAll = async () => {
  const response = await fetch(SEND_CURRENCIES);
  const data = await response.json();
  delete data.USDT;

  return data;
};

export default getCurrency;
