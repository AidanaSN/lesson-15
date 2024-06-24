let c = 24;

let f = (c * 9/5) + 32;
let k = c + 273.15;

console.log("Температура в градусах Фаренгейта:" + f);
console.log("Температура в градусах Кельвина:" + k);


let deposit = 1000;
let rate = 0.05;

let d = deposit * (1 + rate);
let d2 = deposit * (1 + rate) * (1 + rate);
let d3 = deposit * (1 + rate) * (1 + rate) * (1 + rate);

console.log("Сумма вклада через год:" + d);
console.log("Сумма вклада через два года:" + d2);
console.log("Сумма вклада через три года:" + d3);