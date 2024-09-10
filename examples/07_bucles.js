console.log('07');
///                 0        1         2
const products = ['cap', 'T-shirt', 'shoes'];

const productMessage = (productTitle) => {
    console.log(`producto ${productTitle}`);
};

// while, do-while, for 
// bucle for
///        inicializamos indice; condicion para seguir recorriendo; index = index + 1
for (let index = 0;index < 3; index++ ) {
    console.log('dentro del loop');
}

for (let index = 0; index < products.length; index++) {
    const product = products[index];
    productMessage(product);
}

let index = 0;

while (index < products.length) {
    console.log('dentro del while')
    const product = products[index];
    productMessage(product);
    index++;
}
/*
while (true) {
    const info = prompt('Dame un producto');
    if (info === null || info.trim() === 'NO') break;
    products.push(info);
    console.log(products);
}
*/
console.log('end script')

/* Ejercicio: Dado este listado de valores, crea un programa que separe los números pares de los impares en dos arrays diferentes.

const numbers = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101, null, '', false, NaN];

const evenNumbers = []; // Array para almacenar números pares
const oddNumbers = [];  // Array para almacenar números impares */

const numbers = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101, null, '', false, NaN];
const evenNumbers = []; // Array para almacenar números pares
const oddNumbers = [];  // Array para almacenar números impares

// Recorremos el array de números y verificamos si el número es par o impar
for (let i = 0; i < numbers.length; i++) {
const num = numbers[i];

  // Comprobamos si el valor es un número válido
if (typeof num === 'number' && !isNaN(num)) {
    if (num % 2 === 0) {
  evenNumbers.push(num); // Agregamos el número al array de números pares
} else {
  oddNumbers.push(num);  // Agregamos el número al array de números impares
    }
}
}
console.log('Números pares:', evenNumbers);
console.log('Números impares:', oddNumbers);
//arrays de arrays
const usersProducts = [
    ['Tv', 'Pc'], // User 1
    ['Cap', 'T-shirt'], //user 2
    ['Pants', 'Jeans'], // user 3
];


console.log(usersProducts[2][1]); // ['Jeans']
const user3 = ['Pants', 'Jeans'];
console.log(user3[1]);
// Bucle Anidado
for (let index = 0; index < usersProducts.length; index++) {
    const productUser = usersProducts[index];
    for (let productIndex = 0; productIndex < productUser.length; productIndex++) {
        console.log(productUser[productIndex]);
    }

}

const tree = [
    ['-','-','*','-','-'],
    ['-','*','*','*','-'],
    ['*','*','*','*','*']
]

/*let message4 = '';
for (let index = 0; index < tree.length; index++) {
    const row = tree[index];
    for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
        const column = row[columnIndex];
        message4 = message4 + column
    }
    message4 = message4 + '\n'
}*/

// for of
let message4 = '';
for (let row of tree) {
    for (let column of row) {
        message4 = message4 + column
    }
    message4 = message4 + '\n'
}

console.log(message4)



console.log('end Script')

