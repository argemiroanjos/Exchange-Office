import Swal from 'sweetalert2';
import { renderCoins } from './components';
import { fetchExchange } from './services/exchange';

import './style.css';
import './reset.style.css';

const ButtonElement = document.querySelector('header form button');

ButtonElement.addEventListener('click', async () => {
  try {
    const inputElement = document.querySelector('header form input');
    const inputValue = inputElement.value;

    const exchangeRates = await fetchExchange(inputValue);
    const { rates } = exchangeRates;
    const { base } = exchangeRates;
    const numberFixed = 3;

    const ratesArray = Object.entries(rates);
    const ratesArrayToObject = ratesArray.map((rateCoin) => {
      const [name, value] = rateCoin;

      return {
        name,
        value: value.toFixed(numberFixed),
      };
    });
    renderCoins(ratesArrayToObject, base);
  } catch (error) {
    Swal.fire({
      title: 'Erro!',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Ok',
    });
  }
});
