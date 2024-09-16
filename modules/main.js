// Para cuando es export default
//ESmodules
import calculadora, { dfaultValue, test } from './utils.js';
// Prara cuando es export solo
//comon js
// const calculadora = require('./utils.js')
const count1 = calculadora();
count1.sumar(dfaultValue);
count1.dividir(2);
console.log(count1.total());
console.log(test); 