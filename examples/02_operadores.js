console.log('02');
const firstProductName = 'T-shirt';
const firstProductPrice = 15;
const firstProductQuantity = 2;

const secondProductName = 'cap';
const secondProductPrice = 35;
const secondPrpductQuantity = 2;

const suma = firstProductPrice + secondProductPrice;
console.log(suma);
const totalFirstProduct = firstProductPrice * firstProductQuantity; 
console.log(totalFirstProduct);
const totalSecondProduct = secondProductPrice * secondPrpductQuantity;
console.log(totalSecondProduct);
let total = (firstProductPrice * firstProductQuantity) + (secondProductPrice * secondPrpductQuantity);
console.log(total);

const promo = 30;
total = total - promo;
console.log(total);


const message1 = 'Messege 1';
const message2 = 'Message 2';
console.log(message1 + message2);
console.log(`${message1}${message2}`);

console.log('12' + '1');// 121
console.log('12'-'1');// 11
console.log('value 12' - '1');//NaN (Not a Number)
console.log(true + true);// 2 (true 1 / false 2)
console.log(true + false);
console.log(true + 2);
console.log('12' - true);// Nan 11
console.log('12' + true);//12true

const modulo = 4 % 2; // 0

// operadores de comparacion
console.clear();
// A === B c !== D
console.log('12' == '12'); //true
console.log('12' == 12); // true
console.log('12' === 12); // false
console.log('12' !== 12); // true
console.log( firstProductName === secondProductName); // false
console.log(firstProductPrice > secondProductPrice); //false
console.log(firstProductPrice < secondProductPrice); // true
console.log(firstProductPrice >= secondProductPrice); // false

console.log(NaN === NaN); // false (comparacion imposible en JS)
console.log(isNaN(NaN)); // true

let price = '12€'

//operadores lógicos
// AND = && y OR = (barra vertical)

console.log(firstProductPrice > secondProductPrice );

let stock = null;
console.log('stock');
console.log(stock === null);// true
stock = true;
console.log(stock);
const sameString = 'a' === 'a';
console.log(sameString);
// Operador coma (,)
const thirdProductName = 'Pants', thirdProductPrice = 55, thirdProductQantity = 2;


