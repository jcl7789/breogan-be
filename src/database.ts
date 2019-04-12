import mongoose from 'mongoose';
import { mongodb } from './keys';

mongoose.connect(mongodb.URI, {
    useNewUrlParser: true
})
    .then((db: any) => console.log('DB is connected'))
    .catch((err: any) => console.error('Ocurrio un error al iniciar la conexion con Mongoose: '));
