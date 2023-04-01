require('colors');
const { mostrarMenu, pausa } = require('./helpers/mensajes');

const main = async() => {
    console.log('Hola Mundo');
    mostrarMenu();
    pausa();
}

main();