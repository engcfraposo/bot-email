const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const EmailController = require('./controllers/EmailController')


const app = express();


mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack9-ub5tj.gcp.mongodb.net/bancodeemail?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


app.use(cors());
app.use(express.json());


app.post('/', EmailController.store)
app.get('/', EmailController.index)

app.listen(3001);