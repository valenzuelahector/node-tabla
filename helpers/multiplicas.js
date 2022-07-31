const { rejects } = require('assert');
const colors = require('colors');
const fs = require('fs');


//FORMA 1

/*
const crearArchivo = (base) => 
{

    return new Promise((resolve, reject) => {
   
    let salida = '';

    for(let i=1;i<=10;i++)
    {
        salida += `${base} * ${i} = ${base*i} \n`;
    }

    fs.writeFileSync(`tabla-${base}.txt`,salida)
    resolve(`tabla-${base}.txt`);
    reject('Ha ocurrido un error')

    });
}
*/

//Forma 2

const crearArchivo = async (base,listar,hasta) => 
{
    //return new Promise((resolve, reject) => {
   try {
        let salida = '';

        for(let i=1;i<=hasta;i++)
        {
            salida += `${base} * ${colors.red.underline(i)} = ${base*i} \n`;
        }
        if(listar)
        {
         console.log(salida.green);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida)
        return `tabla-${base}.txt`;
    }
    catch(err)
    {
        throw err;

    }
}


const concatenarNombre = async (nombre, apellido) =>
{

    try
    {
        return `Su nombre completo es ${nombre} ${apellido}`
    }
    catch(err)
    {
        throw err;
    }

}

const concatenar2 = (nombre, apellido) =>
{
    return new Promise((resolve, reject) => {
        
        resolve(`El nombre es ${nombre} ${apellido}`);

    })
}


module.exports = {
    crearArchivo,
    concatenarNombre,
    concatenar2
}