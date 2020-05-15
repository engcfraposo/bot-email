const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const EmailController = require('./controllers/EmailController')
const LinkController = require('./controllers/LinkController')


const app = express();


mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack9-ub5tj.gcp.mongodb.net/bancodeemail?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})


app.use(cors());
app.use(express.json());


app.post('/email', EmailController.store)
app.get('/email', EmailController.index)

app.post('/link', LinkController.store)
app.get('/link', LinkController.index)

app.listen(3001);