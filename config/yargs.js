/**
 * 
 */
/*
    HMW
    const argv....

    comando crear 'crear un elemento por hacer'
        --descripcion -d
    
    comando actualizar 'actualiza el estado completado de una tarea'
        --descripcion -d
        --completado -c true
    */

 const opts = {
     descripcion: {
         demand: true,
         alias: 'd'
     },
     completado: {
         alias: 'c',
         default: true
     },
     borrar: {
         alias: 'd',
         default: true
     }
 }

 const argv = require('yargs')
            .command('crear','Crea un elemento por hacer',opts)
            .command('actualizar','Actualiza el estado completado de una tarea',opts)
            .command('borrar','Borra una tarea',opts)
            .help()
            .argv;

module.exports = {
    argv
}