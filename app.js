const express = require('express');
const app = express();
const path = require('path');
const puerto = process.env.PORT; 

const publicPath = path.resolve(__dirname, './public') ;
app.use(express.static(publicPath));

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render('index');
});
app.get('/servicios', (req,res) => {
    res.render('servicios');
});

app.get('/quienes-somos', (req,res) => {
    res.render('quienes-somos');
});

app.get('/productos', (req,res) => {
    res.render('productos');
});

app.get('/clientes', (req,res) => {
    res.render('clientes');
});

app.get('/construccion-sustentable', (req,res) => {
    res.render('construccion');
});

app.get('/presupuestos', (req,res) => {
    res.render('presupuestos');
});

app.get('/contacto', (req,res) => {
    res.render('contacto');
});

app.listen(puerto || 3000, () => {
    console.log('El servidor esta corriendo en el puerto 3000');
});