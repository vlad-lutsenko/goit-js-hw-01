"use strict";
const credits = 23580;
const pricePerDroid = 3000;
const order = prompt("введите необходимое количество дроидов");
if (order === null) {
  console.log("Отменено пользователем!");
}
const totalPrice = pricePerDroid * order;
if (totalPrice > credits) {
  console.log("Недостаточно средств на счету!");
} else {
  console.log(
    `Вы купили ${order} дроидов, на счету осталось ${credits -
      totalPrice} кредитов.`
  );
}
