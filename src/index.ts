import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';

// Importar rutas
import IndexRoutes from './routes/index';
import SalesRoutes from './routes/sales';
import StockRoutes from './routes/stock';
import StatsRoutes from './routes/stats';
import ProfilesRoutes from './routes/profile';
import ScheduleRoutes from './routes/schedule';


// Inicializacion
const app = express();

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

// Rutas
app.use('/', IndexRoutes);
app.use('/profile', ProfilesRoutes);
app.use('/sales', SalesRoutes);
app.use('/schedule', ScheduleRoutes);
app.use('/stats', StatsRoutes);
app.use('/stock', StockRoutes);


// Statics
app.use(express.static(path.join(__dirname, 'public')));

// inicializar el server
app.listen(
    app.get('port'),
    () => { console.log(`Server on port ${app.get('port')}`) }
);