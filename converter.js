let typesCurrencies = {
    EUR: 0.84,
    UAN: 27.2,
    AZN: 1.7
}

let sum = prompt(`Введите сумму, в долларах`, '');
let currency = prompt(`Выберете валюту, в которую нужно конвертировать`, '');
let convertedMoney;

function value() {
    convertedMoney = sum * typesCurrencies[currency];
}

value();

alert(`Сумма составляет ${convertedMoney}`);