"use strict";
let input;
let total = 0;
do {
  input = prompt("введите любое число");
  const inputModified = Number(input);
  if (Number.isNaN(inputModified)) {
    alert("Было введено не число, попробуйте еще раз");
  } else {
    total = inputModified + total;
  }
} while (input !== null);
alert(`Общая сумма чисел равна ${total}`);
