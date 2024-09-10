console.log('05');



function showMessage() {
    const discount = '50%'
    const message = `Oferta todo al ${discount}`;
    console.log(message);
}


function sumCapTshirtPrice() {
    const tshirtPrice = 10;
    const capPrice = 5;
    const total = capPrice + tshirtPrice;
    console.log(total);
}

showMessage();

sumCapTshirtPrice();

const productAName = "T-shirt";
const productAPrice = 20;
const productAQuantity = 2;

const productBName = "Cap";
const productBPrice = 35;
const productBQuantity = 1;

const productCName = "Socks";
const productCPrice = 10;
const productCQuantity = 3;


// funcion con parametros
//1. definicion (palabra reservada "funciton", parentesis y llaves)
//2. parametros
//3. return o devolver valor
//function productTotalPrice(price, qantity){
  //  const total = price * qantity;
    //return total;
//}

// Arrow functions, se asigna a una variable (const), se usa la flecha => y luego llaves {}

/*const productTotalPrice =  (price, quantity) => {
    const total = price * quantity;
    return total;
};
*/

const productTotalPrice = (price, quantity) => price * quantity;


//Las funciones se pueden asignar una variable
const productSubTotal = productTotalPrice(12, 2);

console.log(productSubTotal);




// const firstSubTotal = (productAPrice * productAQuantity)
// const secondSubTotal = (productBPrice * productBQuantity)
// const thirdSubTotal = (productBPrice * productCQuantity)
// const allTotal = (firstSubTotal + secondSubTotal + thirdSubTotal)
// como parametros tambien podemos usar variables.
const productASubTotal = productTotalPrice(productAPrice, productAQuantity);
const productBSubTotal = productTotalPrice(productBPrice, productBQuantity);
const productCSubTotal = productTotalPrice(productCPrice, productCQuantity);



