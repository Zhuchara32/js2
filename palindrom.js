let num = prompt(`Укажите пятизначное число`, '');
let fifthNum = num % 10;
let quadrupleNum = num % 100 - fifthNum;
let thirdNum = num % 1000 - quadrupleNum - fifthNum;
let secondNum = num % 10000 - thirdNum - quadrupleNum - fifthNum;
let firstNum = num - secondNum - thirdNum - quadrupleNum - fifthNum;

fifthNum *= 10000;
quadrupleNum *= 100;
secondNum /= 100;
firstNum /= 10000;

let palindromeNum = fifthNum + quadrupleNum + thirdNum + secondNum + firstNum;

if (num == palindromeNum) {
    alert(`Это число палиндром`);
}

else {
    alert(`Это обычное число`);
}