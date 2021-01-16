
const opts_crear = {
  descripcion: {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
  }
}
const opts_actualizar = {
  descripcion: {
    demand: true,
    alias: 'd',
    desc: 'Actualiza el estado de completado'
  },completado: {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
  }
  
}
const opts_borrar = {
  descripcion: {
    demand: true,
    alias: 'd',
    desc: 'Borra la opcion'
  }
}
const argv = require('yargs')
                .command('crear','Crear un elemento por hacer',opts_crear)
                .command('actualizar','Actualiza el estado completado de una tarea',opts_actualizar)
                .command('borrar','Borra dato',opts_borrar)
                .help()
                .argv;


module.exports = {
  argv
}



