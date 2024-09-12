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


