"use strict";

const order = prompt("введите страну доставки");

const priceChina = 100;
const priceChile = 250;
const priceAustralia = 170;
const priceIndia = 80;
const priceJamaica = 120;

if (order === null) {
  alert("отменено пользователем");
} else {
  switch (order.toLowerCase()) {
    case "китай":
      alert(`Доставка в ${order} будет стоить ${priceChina} кредитов`);
      break;
    case "чили":
      alert(`Доставка в ${order} будет стоить ${priceChile} кредитов`);
      break;
    case "австралия":
      alert(`Доставка в ${order} будет стоить ${priceAustralia} кредитов`);
      break;
    case "индия":
      alert(`Доставка в ${order} будет стоить ${priceIndia} кредитов`);
      break;
    case "ямайка":
      alert(`Доставка в ${order} будет стоить ${priceJamaica} кредитов`);
      break;

    default:
      alert("Извините, но в вашей стране доставка не доступна");
      break;
  }
}
