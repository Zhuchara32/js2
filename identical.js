let num = prompt(`Укажите 3х значное число`, '');
let thirdNum = num % 10;
let secondNum = num % 100 - thirdNum;
let firstNum = (num - secondNum - thirdNum) / 100;

secondNum /= 10;

if (thirdNum === secondNum || thirdNum === firstNum || secondNum === firstNum) {
    alert(`Есть одинаковые цифры`);
}

else {
    alert(`Одинаковых цифр не найдено`);
}