const express = require('express');
const app = express();
const puerto = process.env.PORT; 

// Gerentes de ruteo
const homeRoutes = require('./routes/homeRoutes');
const clientesRoutes = require('./routes/clientesRoutes');

// Ruta publica
app.use(express.static('public'));

// Seteo de archivos ejs
app.set('view engine', 'ejs');

// Llamo al ruteo
app.use('/', homeRoutes);
app.use('/clientes', clientesRoutes);

// Corro el servidor
app.listen(puerto || 3000, () => {
    console.log('El servidor esta corriendo en el puerto 3000');
});