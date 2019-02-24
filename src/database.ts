import mongoose from 'mongoose';
import { mongodb } from './keys';

mongoose.connect(mongodb.URI, {
    useNewUrlParser: true
})
    .then((db: any) => console.log('DB is connected'))
    .catch((err: any) => console.error(err));
