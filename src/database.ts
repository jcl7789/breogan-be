import mongoose from 'mongoose';
import { mongodb } from './keys';

export async function connect() {
    try {
        await mongoose.connect(mongodb.URI, {
            useCreateIndex: true,
            useNewUrlParser: true
        }).then(() => {
            console.log('Conectado a la base de datos');
        });
    } catch (error) {
        
    }
}

export default connect;