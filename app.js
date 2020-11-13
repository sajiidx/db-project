const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const session = require('express-session');
var flash = require('express-flash')

const UserRoute = require('./routes/user')
const AuthRoute = require('./routes/auth')
const HomeRoute = require('./routes/home')
const ProductRoute = require('./routes/product')

mongoose.connect('mongodb://localhost:27017/testdb', { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true,})
const db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('Database Connection Established!')
})

const app = express()

app.set('view-engine', 'ejs')
app.use(express.static(__dirname + '/public'))

app.use(flash())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(session({secret: 'mySecret', resave: false, saveUninitialized: false}));

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Server is running on port ', PORT)
})

app.use('/api/user',UserRoute)
app.use('/api',AuthRoute)
app.use('/',HomeRoute)
app.use('/products',ProductRoute)