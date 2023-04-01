const fs = require('fs')

const guardarInfo = ( data ) => {
    const archivo = './info/data.json';
    fs.writeFileSync(archivo, JSON.stringify(data));
}

module.exports = {
    guardarInfo
}