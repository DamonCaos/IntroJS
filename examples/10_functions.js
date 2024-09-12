console.log('10')
const suma = (valor1, valor2) => {
    const op = valor1 + valor2;
    return op;
};
;
const result = suma(1.2);

// cierres
const counter = () => {
    let count = 0;

    const increment = () => {
        count = count +1
        //count++

    };

    const getCount = () => {
        return count

    };

    return {
        incremento: increment,
        cuenta: getCount,
    }; 

};

const jugador1 = counter();
const jugador2 = counter()
jugador1.incremento();
jugador1.incremento();
console.log(jugador1.cuenta());
console.log(jugador2.cuenta());

const products = [
    { id: 'p001', name: 'T-shirt', price: 20, quantity: 2 },
    { id: 'p002', name: 'Cap', price: 5, quantity: 3 },
    { id: 'p003', name: 'Pants', price: 50, quantity: 1 },
];

const cart = () => {
    let products = [];

    const addProduct = ({name, price, quantity}) => {
        /*
        products.push({
            name,
            price,
            quantity
        });
        */
    //products = products.concat({name, price, quantity});
    products = [...products, {
        name, 
        price, 
        quantity
    }]
    };

    const getProducts = () => {
    return products;
};

    return {
        addProduct,
        getProducts,
    };
};

const shoppingBag1 = cart();
shoppingBag1.addProduct(products[0]);

const shoppingBag2 = cart();
shoppingBag2.addProduct(products[1]);
shoppingBag2.addProduct(products[2]);

console.log(shoppingBag1.getProducts());
console.log(shoppingBag2.getProducts());


/*
Ejericio Calculadora con closures

Crear una calculadora con las siguientes funciones:
*/

const calculadora = () => {
    let result = 0;
    return{
        sumar: (numero) => {result + numero},
        restar: (numero) => {result - numero},
        multiplicar: (numero) => {result * numero},
        dividir: (numero) => {result / numero},
        total: () => result,
    };
};

const miCalculadora = calculadora();

console.log(miCalculadora.sumar(5)); // Debería imprimir undefined
console.log(miCalculadora.restar(2)); // Debería imprimir undefined
console.log(miCalculadora.multiplicar(4)); // Debería imprimir undefined
console.log(miCalculadora.dividir(2)); // Debería imprimir undefined
console.log(miCalculadora.sumar(10)); // Debería imprimir undefined
console.log(miCalculadora.total()); // Debería imprimir 16
