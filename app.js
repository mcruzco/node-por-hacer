//const argv = require('yargs').argv;

const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer')
const colors = require('colors');

let comando = argv._[0];

switch(comando){

  case 'crear':
    let tarea = porHacer.crear(argv.descripcion);
    console.log('Crear por hacer',tarea);
    break;
  case 'listar':

    let listado = porHacer.getListado();
    for( let tarea of listado){
      console.log('=======Por Hacer========='.green);
      console.log(tarea.descripcion);
      console.log('Estado: ',tarea.completado);
      console.log('========================='.green);
   
    }
    console.log('Mostrar todas las tareas por hacer');
    break;
  case 'actualizar':
    let actualizado = porHacer.actualizar(argv.descripcion,argv.completado);
    
    
    break;
  case 'borrar':
    
    let borrado = porHacer.borrar(argv.descripcion);
    console.log('dentro del borrar',borrado);
    break;
  default:
    console.log('Comando no es reconocido');


}