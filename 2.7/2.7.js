// Задачи
// Постфиксная и префиксная формы
// 1. Чему будут равны переменные a, b, c и d в примере ниже?
let a = 1, b = 1;

let c = ++a; // a =2 прибавляется + 1 из за префиксной формы, а c присваивается 2 от переменной "a" 
let d = b++;  // b=2 из за постфиксной формы, а d = 1 присваивается старое значение b 
console.log(a,b,c,d)

//------------------------------------------------

// Результат присваивания
// Чему будут равны переменные a и x после исполнения кода в примере ниже?

let a1 = 2;

let x = 1 + (a1 *= 2); //a1 = 4 так как a1 умножается на 2.x= 5 так как a1+ 1 
console.log(a1,x)

//-----------------------------------------------------------

// Преобразование типов
// Какой результат будет у выражений ниже?
let x1 = "" + 1 + 0  // "10" происходит сложение данных из за "+"тип данных string
let x2 = "" - 1 + 0  // -1 тип данных number 
let x3 = true + false // true тип данных booleng
let x4 = 6 / "3" // 2  происходит деление тип данных number
let x5 = "2" * "3" // 6 тип данных number 
let x6 = 4 + 5 + "px" // 9px слева направо происходит сложение, а потом конкатенация
let x7 = "$" + 4 + 5 // $45 тип данных string 
let x8 = "4" - 2  // 2 тип данных number
let x9 = "4px" - 2 // 4px-2 //тип данных number, происходит ошибка чтения числа  "px"
let x10 = "  -9  " + 5 // " -9 5" тип данных string 
let x11 = "  -9  " - 5 // -14 тип данных number
let x12 = null + 1  // 1 тип данных number так как null становится нулем
let x13 = undefined + 1 // NAN тип данных number, происходит ошибка undefined приводится к NaN
let x14 = " \t \n" - 2 // -2 тип данных number \t \n = 0 

console.log(x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13,x14)

// Исправьте сложение

let A = +prompt("Первое число?", 1);

let B = +prompt("Второе число?", 2);

// alert(A + B); // преобразуем тип данных string в number с помощью "+"перед переменной
alert(+A + +B);
