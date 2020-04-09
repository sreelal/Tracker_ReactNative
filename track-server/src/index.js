require('./models/User') // not assigning to any const because no need to execte always , only need to execute once
require('./models/Track')
const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const authRoutes = require('./router/authRoutes')
const requireAuth = require('./middleware/requireAuth')
const trackRoutes = require('./router/trackRoutes')

const app = express();
app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri = 'mongodb+srv://admin:passwordpassword@cluster0-r8fyb.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Connected to Mongo Instance')
})

mongoose.connection.on('error', (error) => {
    console.error('Error Connecting to Mongo', error)
})

app.get('/',requireAuth, (req, res) => {
    res.send('Your Email is '+ req.user.email);
})

app.listen(3000, () => {
    console.log('Listening on Port 3000')
})
