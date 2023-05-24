import './style.css'
import './reset.style.css'

const ulElement = document.querySelector('.container main ul')

// Função que retorna o <b> e a <li> preenchidos.
const createLiElement = (name, value) => {
    const liElement = document.createElement('li');
    liElement.innerHTML = `
    <b>${name}</b>
    <span>${value}</span>
    `
    return liElement;
};

const renderCoins = (coins, baseCoin) => {
    ulElement.innerHTML = '';
    coins.forEach(coin => {
        const name = coin.name;
        const value = coin.value;

        const liElement = createLiElement(name, value);
        ulElement.appendChild(liElement)
    });
};