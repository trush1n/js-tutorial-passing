// Задачи
// if (строка с нулём)
// Выведется ли alert?

if ("0") {
    alert( 'Привет' );   //выведется привет так как имеется строка ("0") 
  }

//---------------------------------------------------------------------------

//   Название JavaScript
//   важность: 2
//   Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“
  
//   Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»
let nameJS = prompt("Какое «Официальное» название Javascript?", "Пиши");
if (nameJS =="ECMAScript") {
    alert("Верно")
} else {
    alert("Не знаете? «ECMAScript»!")
}

//---------------------------------------------------------------------------

// Покажите знак числа
// важность: 2
// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
let number = +prompt("Напиши цифру","Цифру пиши тут");
if (number > 0){
    alert("Больше нуля!")
} else if (number < 0 ){
    alert("Меньше нуля")
} else if (number == 0) {
    alert("Значение равно нулю.")
} else {
    alert("Не корректное значение")
}

//---------------------------------------------------------------------------

// Перепишите 'if' в '?'
// важность: 5
// Перепишите конструкцию if с использованием условного оператора '?':

// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

// Решение
let a = 4, b =5
let result = ( a + b < 4 ) ? alert("мало") : alert("Много");
console.log(result)
//---------------------------------------------------------------------------

// Перепишите 'if..else' в '?'
// важность: 5
// Перепишите if..else с использованием нескольких операторов '?'.

// Для читаемости рекомендуется разбить код на несколько строк.

// let message;

// if (login == 'Сотрудник') {
//     message = 'Привет';
//   } else if (login == 'Директор') {
//     message = 'Здравствуйте';
//   } else if (login == '') {
//     message = 'Нет логина';
//   } else {
//     message = '';
//   }

// Решение

let login = prompt("Введите свой login","")
let message = (login == "Сотрудник") ? alert("Привет") :
(login == "Директор") ? alert("Здравствуйте") :
(login == "") ? alert("Нет логина") :
"";