export const fetchExchange = async (inputValue) => {
    const response = await fetch(`https://api.exchangerate.host/latest?base=${inputValue}`);
    const data = await response.json();
    const base = data.base;

    if (base !== inputValue.toUpperCase()) {
        throw new Error(`E aí, carinha que mora logo alí?!
        Me passa uma moeda!`);
    }
    return data;
};