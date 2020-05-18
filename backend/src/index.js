import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from'cors';

import EmailController from './controllers/EmailController'
import LinkController from './controllers/LinkController'


const app = express();



mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack9-ub5tj.gcp.mongodb.net/bancodeemail?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then('Conected in the Database')


app.use(cors());
app.use(express.json());


app.post('/email', EmailController.store)
app.get('/email', EmailController.index)

app.post('/link', LinkController.store)
app.get('/link', LinkController.index)

app.listen(3001);