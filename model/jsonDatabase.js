const fs = require('fs');
const path = require('path');
// Recibo por parámetro la entidad para reutilizarlo


const model = function (name) {
    return {
        tablePath: path.resolve(__dirname, '../data/', `${name}.json`),
      
        // Leo el archivo Json y lo transformo en Array de objeto literal     
        readFile: function ( ){
            let tableContents = fs.readFileSync(this.tablePath, 'utf-8');
            return JSON.parse(tableContents) || [];
        },
        // leer clientes Json para home
        readClients: function() {
            const jsonClients = fs.readFileSync(__dirname + '/../data/clients.json');
            const clients = JSON.parse(jsonClients);
            return clients
        },
        // Grabo el array que recibo por parámetro y lo paso a formato Json
        writeFile : function(contents) {
            let tableContents = JSON.stringify(contents, null, ' ');
            fs.writeFileSync(this.tablePath, tableContents);
        },
        // Leo todos los registros del archivo
        all: function() {
            return this.readFile();
        },
        // Busco por id
        find:function(id) {
            let rows = this.readFile();
            return rows.find(clients => clients.id == id);
        },
        // Busca por field al primer elemento de la DB que cumpla con las condiciones de la busqueda, devuelve 1 elemento
        findFirstByField: function(field, text){
            let rows = this.all();
            let elementFound = rows.find(element => element[field] === text);
            return elementFound;
        },
        // Busca por field a todos los elementos de la DB que cumplan con las condiciones de la busqueda, devuelve 1 array
        findAllByField: function(field, text){
            let rows = this.all();
            let allElementsFound = rows.filter(element => element[field] === text);
            return allElementsFound;
        }

      
    }
}

module.exports = model