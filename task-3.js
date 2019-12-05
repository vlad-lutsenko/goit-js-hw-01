"use strict";
const ADMIN_PASSWORD = "jqueryismyjam";
let message;
let password = prompt("введите пароль");
if (password === null) {
  message = "Отменено пользователем!";
} else if (password === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}
alert(message);
