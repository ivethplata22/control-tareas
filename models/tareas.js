const Tarea = require("./tarea");

class Tareas {
    _listado = {};

    constructor() {
        this._listado = {};
    }

    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        })
        return listado;
    }

    cargarTareasFromArray(tareas = []) {
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

    crearTarea(desc = '') {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto() {
        console.log();
        this.listadoArr.forEach((tarea, index) => {
            const idx = `${index+1}.`.green;
            const { desc, completadoEn } = tarea;
            const estado = (completadoEn) ? 'Completada'.green : 'Pendiente'.red;
            console.log(`${idx} ${desc} ${'::'.yellow} ${estado}`);
        });
    }

    listarPendientesCompletadas(completadas = true) {
        console.log();
        let i = 0;
        this.listadoArr.forEach( tarea => {
            const { desc, completadoEn } = tarea;
            if (completadas) {
                if(completadoEn) {
                    i += 1;
                    console.log(`${`${i.toString()}.`.green} ${desc} ${'::'.yellow} ${'Completada'.green}`)
                }
            } else {
                if (!completadoEn) {
                    i += 1;
                    console.log(`${`${i.toString()}.`.green} ${desc} ${'::'.yellow} ${'Pendiente'.red}`)
                }
            }
        });
    }
}

module.exports = Tareas;