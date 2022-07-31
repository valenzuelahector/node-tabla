
//const { argv } = require('yargs');
const { boolean } = require('yargs');
const { crearArchivo, concatenarNombre, concatenar2} = require('./helpers/multiplicas');
const argv  = require('./config/yargs'); 
var colors = require('colors');


 
console.clear();


console.log(argv);

//const [, , arg3 = 'base=5'] = process.argv;

//const [ , base=5] = arg3.split('=')

//console.log(base);



//const base = 50;



crearArchivo(argv.b, argv.l, argv.h)
.then(archivo => console.log(archivo))
.catch(err => console.log(err));

//concatenarNombre('Hector', 'Valenzuela')
//.then(nombreCompleto => console.log(nombreCompleto))
//.catch(err => console.log(err));


//concatenar2('Hector', 'Muñoz')
//.then(nombreFinal => console.log(nombreFinal))
//.catch(err => console.log(err));