

const fs = require('fs');


let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);
    //console.log(data);

    fs.writeFile('db/data.json',data, (err) => {
        if (err) throw new Error('no se pudo Grabar',err);
        
    });

}

const cargarDB = () => {
    
    try {
        listadoPorHacer = require('../db/data.json');    
    } catch (error) {
        listadoPorHacer = [];
    }

}

const crear = (descripcion) => {
   
    /*
    
    */
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    console.log(listadoPorHacer);
    guardarDB();

    return porHacer;
}

/**My function */
const getListado = () => {
    try {
        listadoPorHacer = require('../db/data.json');    
    } catch (error) {
        listadoPorHacer = [];
    }
    return listadoPorHacer;
}

const actualizar = (descripcion, completado ) => {

    cargarDB();
    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion );

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else { 
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    //let indexToDelete = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion );
    let nuevoListado = listadoPorHacer.filter( tarea => {
        return tarea.descripcion !== descripcion
    });

    if (nuevoListado.length === listadoPorHacer.length ) {
        
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}