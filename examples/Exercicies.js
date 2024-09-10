// Ejercicio 1
const productAName = "T-shirt";
const productAPrice = 20;
const productAQuantity = 2;

const productBName = "Cap";
const productBPrice = 35;
const productBQuantity = 1;

const productCName = "Socks";
const productCPrice = 10;
const productCQuantity = 3;

//Calcula el precio total de todos los productos sumando los subtotales de cada uno (precio * cantidad).

const firstSubTotal = (productAPrice * productAQuantity)
const secondSubTotal = (productBPrice * productBQuantity)
const thirdSubTotal = (productBPrice * productCQuantity)
const allTotal = (firstSubTotal + secondSubTotal + thirdSubTotal)

/*/Usa una estructura condicional (if, else if, else) para mostrar un mensaje según el total:
Si el total es menor a 50, muestra "Puedes agregar más productos".
Si el total es entre 50 y 100, muestra "Estás cerca de tu límite de compra".
Si el total es mayor a 100, muestra "Has alcanzado el límite de tu compra".

Muestra el total y el mensaje en un único console.log.*/ 

let message = '';
if (allTotal < 50) {
    message = 'Puedes agregar mas productos';
} else if (allTotal > 100) {
    message = 'Has alcanzado el límite de tu compra.';
} else if (50 < allTotal && allTotal > 100) {
    message = 'Estás cerca de tu límite de compra';
};

console.log(message)

/*EJERCICIO 2

Crea un programa que determine si un usuario puede recibir una promoción basada en su selección de productos.

Instrucciones:

Crea dos variables que representen el nombre de un producto seleccionado por el usuario y la cantidad. (En nuestro caso será usando prompt).
const selectedProduct = prompt('Ingresa el nombre del producto');
const selectedQuantity = parseInt(prompt('Ingresa la cantidad'));

Usa operadores lógicos para determinar si el usuario puede tener para una promoción especial:
Si selecciona un "T-shirt" y la cantidad es 2 o más, el mensaje será "¡Recibes un 10% de descuento en la segunda camiseta!".
Si selecciona un "Cap" y la cantidad es 3 o más, el mensaje será "¡Obtén una gorra gratis por la compra de 3!".
Si no cumple ninguna de las condiciones, el mensaje será "No hay promociones para esta selección".

Muestra el mensaje en un único console.log.*/

const selectedProduct = prompt('Ingresa el nombre del producto');
const selectedQuantity = parseInt(prompt('Ingresa la cantidad'));
let message2 = ''
if (selectedProduct === productAName && selectedQuantity >= 2){
    message2 = '¡Recibes un 10% de descuento en la segunda camiseta!';
} else if (selectedProduct === productBName && selectedQuantity >= 3){
    message2 = '¡Obtén una gorra gratis por la compra de 3!';
} else {
    message2 = 'No hay promociones para esta selección'
}

console.log(message2)


/*ejercicio 2 Crea una función para poder usar el código de la promoción de productos en el carrito de compras.
Esta función debe recibir el nombre del producto y la cantidad, y devolver un mensaje con la promoción aplicada.
*/

let message3 = '';
// Verificando las condiciones para aplicar la promoción
if (selectedProduct === 'T-shirt' && selectedQuantity >= 2) {
message3 = '¡Recibes un 10% de descuento en la segunda camiseta!';
} else if (selectedProduct === 'Cap' && selectedQuantity >= 3) {
message3 = '¡Obtén una gorra gratis por la compra de 3!';
} else {
message3 = 'No hay promociones para esta selección';
}

const showProductInfo = (selectedProduct, selectedQuantity) => {
    let message3 = ''
    if (selectedProduct === 'T-shirt' && selectedQuantity >= 2) {
        message3 = '¡Recibes un 10% de descuento en la segunda camiseta!';
    } else if (selectedProduct === 'Cap' && selectedQuantity >= 3) {
        message3 = '¡Obtén una gorra gratis por la compra de 3!';
    } else {
        message3 = 'No hay promociones para esta selección';
    }
    return message3

} 

console.log(showProductInfo)

/*
Paso 1: Crea un array vacío llamado "numeros"
Paso 2: Agrega los números del 1 al 5. Pon entre el número 3 y 4 la palabra keepcoding
Paso 3: Imprime el contenido del array "numeros" en la consola
Paso 4: detecta con código si dentro del array está la palabra keepcoding. Si está imprime el mensaje este array no solo tiene números
Paso 5: Agrega el número 10 al inicio del array "numeros"
Paso 6: Imprime el contenido del array "numeros" en la consola
Paso 7: Utiliza el método indexOf para encontrar el índice de la palabra keepcoding
Paso 8: Elimina la palabra keepcoding a partir del índice anterior
Paso 9: Imprime el contenido del array "numeros" en la consola
Paso 10: Imprime la longitud del array "numeros" en la consola
*/
console.clear
const numeros = [];
numeros.push(1,2,3,'keepcoding',4,5);
console.log(numeros);
if (numeros.includes('keepcoding')) {
    console.log('Este array no solo tiene números');
}
numeros.unshift(10);
console.log(numeros);
const numerosIndex = numeros.indexOf('keepcoding');
numeros.splice(numerosIndex,1);
console.log(numeros);
console.log(numeros.length);

// ejercicio 2
const input = [
    'test',
    'keepcoding',
    'testeo',
    'html'
];

const getName = (list) => {
    const lastElement = list.length - 1;
    const extension = list[lastElement];
    list.pop();
    return `${list.join('/')}.${extension}`;
};

console.log(getName(input));
console.log(input);



// Inicializar un array vacío para almacenar el patrón
const patternArray = [];

// Crear el patrón usando un bucle for
for (let i = 0; i < 3; i++) { // Bucle para las 3 filas
  let row = []; // Crear un array vacío para cada fila

  // Crear la fila con otro bucle for para las 5 columnas
for (let j = 0; j < 5; j++) {
    if (i === 0) { // Primera fila: --*--
    row = ['-', '-', '*', '-', '-'];
    } else if (i === 1) { // Segunda fila: -***-
    row = ['-', '*', '*', '*', '-'];
    } else if (i === 2) { // Tercera fila: *****
    row = ['*', '*', '*', '*', '*'];
    }
}

  // Agregar la fila al array bidimensional
patternArray.push(row);
}

// Mostrar el array bidimensional en la consola de forma visual
for (let i = 0; i < patternArray.length; i++) {
console.log(patternArray[i].join(''));
}

const tree = [
    ['-','-','*','-','-'],
    ['-','*','*','*','-'],
    ['*','*','*','*','*']
];
for (let index = 0; index < tree.length; index++) {
    const row = tree[index];
    const rowString = row.join('')

}
let message4 = '';
for (let index = 0; index < tree.length; index++) {
    const row = tree[index];
    for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
        const column = row[columnIndex];
        message4 = message4 + column
    }
    message4 = message4 + '\n'
}
console.log(message4)
