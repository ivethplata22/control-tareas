require('colors');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');
const { guardarInfo, leerInfo } = require('./helpers/guardarArchivo');

const main = async() => {
    let opt = '';
    const tareas = new Tareas();
    const tareasInfo = leerInfo();
    if(tareasInfo)
        tareas.cargarTareasFromArray(tareasInfo);

    do {
        opt = await inquirerMenu();
        switch (opt) {
            case '0':
                // Salir
                console.log('\nAdios :D'.yellow);
            break;
            case '1':
                // Crear Tarea
                const desc = await leerInput('Descripción de la tarea: ');
                console.log('\n');
                if(desc != 'salir') {
                    tareas.crearTarea(desc);
                    console.log('Tarea Creada Con Exito'.yellow);
                } else {
                    console.log('Se anulo la creación de la tarea'.red);
                }
            break;
            case '2':
                // Listar Tareas
                console.log(tareas.listadoArr);
            break;
            case '3':
                // Listar Tareas Completadas
            break;
            case '4':
                // Listar Tareas Pendientes
            break;
            case '5':
                // Completas Tarea(s)
            break;
            case '6':
                // Borrar Tarea
            break;
        }

        guardarInfo(tareas.listadoArr);
        await pausa();
        console.clear();
    } while (opt !== '0');
}

main();