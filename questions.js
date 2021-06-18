let color = prompt(`Какой Ваш любимы цвет?`, '');
let water = prompt(`Какую воду Вы пьете?`, '');
let animal = prompt(`Какое Ваше любимое животное?`, '');

let colorOb = {
    white: 2,
    black: 0,
    green: 0
}

let waterOb = {
    mineral: 0,
    raw: 0,
    boiled: 2
}

let animalOb = {
    dog: 2,
    cat: 0,
    fish: 0
}

let result = colorOb[color] + waterOb[water] + animalOb[animal];

alert(`Вы набрали ${result} балов`);