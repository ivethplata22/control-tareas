const fs = require('fs')
const archivo = './info/data.json';

const guardarInfo = ( data ) => {
    fs.writeFileSync(archivo, JSON.stringify(data));
}

const leerInfo = () => {
    if(!fs.existsSync(archivo))
        return null;

    let info = JSON.parse(fs.readFileSync(archivo, { encoding: 'utf-8' }));
    return info;
}

module.exports = {
    guardarInfo,
    leerInfo
}