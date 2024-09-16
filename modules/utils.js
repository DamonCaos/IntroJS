const calculadora = () =>{
    let subTotal = 0;
    const sumar = (num) =>{
        subTotal += num
    }

    const restar = (num) =>{
        subTotal += num
    }

    const multiplicar = (num) =>{
        subTotal *=  num
    }

    const dividir = (num) =>{
        subTotal /= num
    }

    const total = () =>{
        return subTotal
    };

    return {
        sumar,
        restar,
        multiplicar,
        dividir,
        total,
    };
}


export const dfaultValue = 12
export const test = 'message'

// 1 export default
// export
export default calculadora;