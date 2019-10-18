import mongoose, { Connection } from 'mongoose';
import * as autoIncrement from 'mongoose-auto-increment';
import { mongodb } from './keys';

export function connect() {
    mongoose.connect(mongodb.URI, {
        useCreateIndex: true,
        useNewUrlParser: true
    }).then((object) => {
        autoIncrement.initialize(object.connection);
        console.log('Conectado a la base de datos -> ', object.connection.db.databaseName);
    }).catch((error) => {
        console.error(error);
    });
}

export default connect;