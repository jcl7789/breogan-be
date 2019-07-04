import mongoose from 'mongoose';
import { mongodb } from './keys';

export async function connect() {
    try {
        await mongoose.connect(mongodb.URI, {
            useNewUrlParser: true
        });
        console.log('Conectado a la base de datos');
    } catch (error) {
        
    }
}

export default connect;