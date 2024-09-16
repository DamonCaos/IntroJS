console.log('12');

const cargarDatosWeb = () => {
    setTimeout(() => {
    datos = [1, 2, 3];
    cb(datos);
    }, 1000)
}

//callbacks
//promises
//async/await

console.log('hola');



let loading = true

cargarDatosWeb((datos) => {
  console.log(datos);
  loading = false
});


