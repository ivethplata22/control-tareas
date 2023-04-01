const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear Tarea'
            },
            {
                value: '2',
                name: '2. Listar Tareas'
            },
            {
                value: '3',
                name: '3. Listar Tareas Completadas'
            },
            {
                value: '4',
                name: '4. Listar Tareas Pendientes'
            },
            {
                value: '5',
                name: '5. Completar Tareas(s)'
            },
            {
                value: '6',
                name: '6. Borrar Tareas'
            },
            {
                value: '0',
                name: '0. Salir'
            }
        ]
    }
]

const inquirerMenu = async() => {
    console.clear();
    console.log('============================='.green);
    console.log('    Seleccione una opción    '.green);
    console.log('=============================\n'.green);
    const { opcion } = await inquirer.prompt(preguntas);
    return opcion;
}

const pausa = async() => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'ENTER'.green} para continuar`
        }
    ]
    console.log('\n');
    await inquirer.prompt(question);
}

const leerInput = async( message ) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if(value.length === 0) {
                    return 'Por favor ingrese un valor'
                }
                return true;
            }
        }
    ];
    const { desc } = await inquirer.prompt(question);
    return desc
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput
}