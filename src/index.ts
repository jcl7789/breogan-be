import App from './app';
import database from './database';

// Inicializacion
database();
const app = new App();
app.start();