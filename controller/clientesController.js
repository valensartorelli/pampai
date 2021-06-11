// Gestor del modelo
const jsonDB = require('../model/jsonDatabase');
// Manejar metodos del producto
const clientModel = jsonDB('datosClientes');

let clientesController = {
    index: (req, res) => {
        res.render('clientes');
    },
    show: (req, res) => {
        const clients = clientModel.find(req.params.id);
        if(clients) {
            res.render('detalleCliente', {clients});
        } else {
            res.render('error404');
        }
    }
}

module.exports = clientesController;