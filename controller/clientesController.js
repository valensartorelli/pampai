// Gestor del modelo
const jsonDB = require('../model/jsonDatabase');
// Manejar metodos del producto
const clientModel = jsonDB('clients');

let clientesController = {
    index: (req, res) => {
        console.log("entro en index")
        const clients = clientModel.find(req.params.id);
        const todos = clientModel.all();
        
        res.render('clientes', {clients, todos});
    },
    show: (req, res) => {
        console.log("entro en show")
        const clients = clientModel.find(req.params.id);
        const todos = clientModel.all();
        const id = req.params.id;
        const url = todos[id].url;

        if(clients) {
            res.render('detalleCliente', {clients, todos, id, url});
        } else {
            res.render('error404');
        }
    }
}

module.exports = clientesController;