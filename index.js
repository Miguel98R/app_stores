const express = require('express')
const morgan = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')

require('dotenv').config()


const RedisStore = require("connect-redis").default
const session = require('express-session');
const {createClient} = require('redis');

const db = require('./db')

const app = express()

//configuraciones

app.set('port', process.env.PORT || 3003)
app.set('appName', process.env.APP_NAME || 'app_stores')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')


app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(morgan('dev'))
app.use('/public', express.static(path.join(__dirname, 'public')))


// Initialize client.
let redisClient = createClient()
redisClient.connect().catch(console.error)

// Initialize sesssion storage.
app.use(
    session({
        store: new RedisStore({
            client: redisClient,
        }),
        secret: process.env.EXPRESS_SESSION_SECRET,
        name: process.env.NAME_COOKIE_SESSION,
        resave: true,
        saveUninitialized: true,
        cookie: {maxAge: 1 * 24 * 60 * 60 * 1000},
        httpOnly: true
    })
)


//rutas
app.use(require('./viewEngine/routes'))
app.use('/api', require('./routes/_api'))



//Inicializando el servidor
app.listen(app.get('port'), () => {
    console.log(app.get('appName'))
    console.log("Server port:", app.get('port'))

})

