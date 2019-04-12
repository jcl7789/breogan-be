import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';
import morgan from 'morgan';

// Importar rutas
import IndexRoutes from './routes/index';

// Inicializacion
const app = express();
import './database';

// Configuracion
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    extname: '.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    helpers: require('./lib/helpers')
}) )
app.set('view engine', '.hbs');

// MIDD
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

// Rutas
app.use('/api', IndexRoutes);

// Statics
app.use(express.static(path.join(__dirname, 'public')));

// inicializar el server
app.listen(
    app.get('port'),
    () => { console.log(`Server on port ${app.get('port')}`) }
);