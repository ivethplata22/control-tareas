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

    borrarTarea(id = '') {
        if(this._listado[id]) {
            delete this._listado[id];
        }
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
            const estado = (completadoEn) ? `${'Completada'.green} ${'::'.yellow} ${completadoEn}` : 'Pendiente'.red;
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
                    console.log(`${`${i.toString()}.`.green} ${desc} ${'::'.yellow} ${'Completada'.green} ${'::'.yellow} ${completadoEn}`)
                }
            } else {
                if (!completadoEn) {
                    i += 1;
                    console.log(`${`${i.toString()}.`.green} ${desc} ${'::'.yellow} ${'Pendiente'.red}`)
                }
            }
        });
    }

    toggleCompletadas(ids=[]) {
        ids.forEach(id => {
            const tarea = this._listado[id];
            if(!tarea.completadoEn)
                tarea.completadoEn = new Date().toISOString();
        });

        this.listadoArr.forEach( tarea => {
            if( !ids.includes(tarea.id) )
                this._listado[tarea.id].completadoEn = null;
        });
    }
}

module.exports = Tareas;