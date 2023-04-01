require('colors');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

const main = async() => {
    let opt = '';
    const tareas = new Tareas();

    do {
        opt = await inquirerMenu();
        
        switch (opt) {
            case '1':
                // Crear Tarea
                const desc = await leerInput('Descripción de la tarea: ');
                tareas.crearTarea(desc);
            break;
            case '2':
                // Listar Tareas
                console.log(tareas._listado);
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
            default:

            break;
        }

        await pausa();
    } while (opt !== '0');
}

main();