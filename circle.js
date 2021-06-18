let circleL = prompt(`Укажите длину окружности`, '');
let squareP = prompt(`Укажите периметр квадрата`, '');
let circleD = circleL / 3.14;
let squareSide = squareP / 4;

if (circleD < squareSide) {
    alert(`Да, ваша окружность поместиться в квадрат`);
}

else {
    alert(`Нет, Ваша окружность не поместиться в квадрат`);
}