let a = 5 > 4               // true так как 5 больше 4 
let b = "ананас" > "яблоко" // false так как тип данных string первая буква "а" в js, она меньше чем "я"
let c ="2" > "12"          // true так как тип данных string 2 больше 1
let d = undefined == null  // true так как null и undefined равны только друг другу при нестрогом сравнении "==".
let e = undefined === null // false так как строе сравнение
let f = null == "\n0\n"   // false null равен только undefined
let g = null === +"\n0\n" // false строгое сравнение типов данных

console.log(a,b,c,d,e,f,g)