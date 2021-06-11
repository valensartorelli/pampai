let homeController = {
    index: (req, res) => {
        res.render('index');
    },
    empresa: (req, res) => {
        res.render('quienes-somos');
    },
    productos: (req, res) => {
        res.render('productos');
    },
    construccion: (req, res) => {
        res.render('construccion');
    },
    presupuestos: (req, res) => {
        res.render('presupuestos');
    },
    contacto: (req, res) => {
        res.render('contacto');
    } 
}

module.exports = homeController;