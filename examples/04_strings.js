console.log('04')

let userName = '   Javi';
let password = '1234';
let authenticated = false;

userName = userName.trim().toLowerCase();
password = password.trim().toLowerCase();



if (userName === 'Javi' && password === '1234') {
    authenticated = true;
}

console.log(`Is autenticated ${authenticated}`);

const email = prompt('Escribe tu email');
const email2 = 'test@KeepCoding.es;'

if (email === null){
    throw new Error('Null is not valid');
}

console.log(email.toLowerCase().trim().includes('@test.com'));
console.log(email.toLowerCase().trim().replace('test', '***'));

if (!email.toLowerCase().trim().includes('@KeepCoding')) {
    //lanzar un error
    throw new Error('No es un correo de KeepCoding');
}

/*/ transformar str en numeros para evitar errores
Las 3 formas hacen mas o menos lo mismo*/
const promptPrice = '23'
console.log(parseInt(promptPrice));
console.log(+promptPrice);
console.log(Number(promptPrice));

