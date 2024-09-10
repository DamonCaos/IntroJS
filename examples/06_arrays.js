console.log('06')

const myProducts = ['tv', 'PC', 'Cap']; // Listas
console.log(myProducts);

//Añadir elementos
myProducts.push('shoes');
console.log(myProducts);
// Ver como acceder a los elementos de la lista
console.log(myProducts[0]);// tv
console.log(myProducts[1]);// pc
const thirdProduct = myProducts[2]
console.log(thirdProduct.trim() === 'Cap');//true
// Ver como modificar una lista. añadir, eliminar, modificar, concatenar
myProducts.pop();
console.log(myProducts);
myProducts[1] = 'pc - out of stock';
console.log('--------')
console.log(myProducts);
// Ver como hacer copias de las listas
const user2Products = [...myProducts];//Es la unica manera de hacer copia de un array sin modificar la original cuando haya cambios
//const user2Products = [].concat(myProducts);
user2Products.push('pants');
console.log(user2Products);
console.log(myProducts);
const addProduct = (list, newProduct) => {
    const newList = [...list];
    newList.push(newProduct);
    return newList;
};
const copyProducts = addProduct(myProducts,'laptop');
console.log(copyProducts);
console.log(myProducts);
// Hacer validaciones en la lista. Si tenemos algun elemento
console.log(myProducts.indexOf('laptop'));// -1
console.log(copyProducts.indexOf('laptop'));// 3
console.log(copyProducts.includes('laptop')); // true
console.log(copyProducts.reverse()); 
// map, filter, reduce, some, every
// Convertir lista a otro tipo (str)
const csvProducts = 't-shirt,pants,shoes,cap';
const products = csvProducts.split(','); // convierte en un listado ['t-shirt','pants', 'shoes', 'cap'] con el separador que yo le diga, en este caso ","
const shoesIndex = products.indexOf('shoes');// 2
products.splice(shoesIndex, 1);
console.log(products);
const newCsvProduct = products.join(';');
console.log(newCsvProduct)
//ejercicio 1
const numeros = [];// crea una lista vacia llamada numeros
numeros.push(1,2,3,'keepcoding',4,5); // añade los numeros del 1 al 5 y entre el 3 y el 4 la palabra keepcoding
console.log(numeros); // imprime por pantalla el array numeros
if (numeros.includes('keepcoding')) {
    console.log('Este array no solo tiene números');
} // si la lista contiene keepcoding muestra por pantalla un mensaje
numeros.unshift(10); // coloca en la primera posicion el numero 10
console.log(numeros); // imprime el resultado
const numerosIndex = numeros.indexOf('keepcoding'); // identifica la posicion de la palabra keeopcoding
numeros.splice(numerosIndex,1); // elimina la palabra keepcoding
console.log(numeros); // imprime el resultado
console.log(numeros.length);// imprime la longitud de la lista
//ejerecicio 2
const input = [
    'test',
    'keepcoding',
    'testeo',
    'html'
];

const getName = (list) => {
    const lastElement = list.length - 1;
    const extension = list[lastElement];
    const newList = [...list];
    newList.pop();
    return `${newList.join('/')}.${extension}`;
};

console.log(getName(input));
console.log(input);
// arrays o listas de arrays (Origen)
const usersProducts = [
    ['Tv', 'Pc'], // User 1
    ['Cap', 'T-shirt'], //user 2
    ['Pants', 'Jeans'], // user 3
];

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


