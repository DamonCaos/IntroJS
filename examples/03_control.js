console.log('03');
const firstProductName = 'T-shirt';
const firstProductPrice = 15;
const firstProductQuantity = 2;

const secondProductName = 'cap';
const secondProductPrice = 35;
const secondPrpductQuantity = 2;

// if │ else if │ else
if (firstProductPrice < secondProductPrice) {
    console.log('El primer producto es mas caro que el segundo');
} else if(firstProductPrice === secondProductPrice) {
    console.log('Mismo precio');
    console.log('El primer producto es mas barato que el segundo');
    
}

console.log('fuera del if');



// operador ternario

console.clear();
let message2 = '';
const samNames = firstProductName === secondProductName
const samePrices = firstProductPrice === secondProductPrice
if (samNames && samePrices) {
    message2= 'Son el mismo producto';
} else {
    message2 = 'Son diferentes';
}

message2 = (firstProductName === secondProductName) ? 'son mismo producto' : 'Son diferentes';

console.log(message2);
const day = prompt('Dime un dia');
// switch case
switch (day) {
    case 'Monday':
        console.log('hay clase ,es Lunes');
        break;
    case 'tuesday':
        console.log('Hay clase');
        break;
 default:
    console.log('No hay clase');     
}