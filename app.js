// Imprimir la tabla del 5 en consola usando un ciclo for
// El modo de importar un módulo en Node.js es con la función require
const { crearArhivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');
// Me permite acceder a los argumentos que se pasan por consola
// ! Todo lo que no sea un dato primitivo es un objeto en js
// .option('l', {
// Listar
// Boolean
// default: false
// 
console.log(argv);


// Llamar la función correctamente

crearArhivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'.rainbow))
    .catch(err => console.log(err));



