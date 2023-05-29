const ulElement = document.querySelector('.container main ul');
const h2Element = document.querySelector('.container main h2');

// Função que retorna o <b> e a <li> preenchidos.
const createLiElement = (name, value) => {
  const liElement = document.createElement('li');
  liElement.innerHTML = `
  <b>${name}</b>
  <span>${value}</span>
  `;
  return liElement;
};

export const renderCoins = (coins, baseCoin) => {
  ulElement.innerHTML = '';
  h2Element.innerHTML = `Valores referentes a 1 ${baseCoin}`;

  coins.forEach((coin) => {
    const { name } = coin;
    const { value } = coin;

    const liElement = createLiElement(name, value);
    ulElement.appendChild(liElement);
  });
};
