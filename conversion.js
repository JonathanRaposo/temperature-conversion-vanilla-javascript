const button = document.querySelector('#conversion-btn');
const celsius = document.querySelector('#celsius');
const fahrenheit = document.querySelector('#fahrenheit');
const degree = document.querySelector('#degree-input');


button.onclick = (e) => {
    e.preventDefault();

    if (degree.value === '') {
        document.querySelector('#result').textContent = `Select degree`;
        return;
    }
    //  convert string to a numerical value
    let temp = Number(degree.value);

    if (celsius.checked) {
        const convertedTemp = Math.round((temp - 32) * 5 / 9);
        document.querySelector('#result').textContent = `${convertedTemp}ºC`;

    } else if (fahrenheit.checked) {

        const convertedTemp = Math.round((temp * 9 / 5) + 32);
        document.querySelector('#result').textContent = `${convertedTemp}ºF`;

    } else {
        document.querySelector('#result').textContent = 'Select a unit.'
    }
}