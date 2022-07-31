const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multipliar'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: false,
                    default: false,
                    describe:'Muestra en consola la tabla de multiplicar'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    demandOption: true,
                    describe: 'hasta donde llega la tabla'
                })
                .check((argv, options) => {
                    console.log('yargs',argv);
                    if(isNaN(argv.b))
                    {
                            throw 'La base tiene que ser un numero';
                    }
                    return true;

                })
                .argv;

module.exports = argv;