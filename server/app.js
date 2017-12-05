

const path = require('path');
const http = require('http');
const express = require('express');
const WebSocket = require('ws');
const logger = require('morgan');
const bodyParser = require('body-parser');
const index = require('./routes/index');

// Comunicacion con electron
process.on('message', (msg) => {
    console.log('padre dice: ', msg);
    process.send('Hola papa!');
});

// Configuracion del Servidor
const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', Number(process.env.PORT) || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// Importacion del Router
app.use('/', index);

// capturar 404 y enviar el errorHandler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// errorHandler
app.use((err, req, res) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


// Create HTTP server.
const server = http.createServer(app);
server.listen(app.get('port'));
server.on('error', (err) => {
    if (err.code === 'EACCES') {
        console.error(`El puerto ${app.get('port')} requiere privilegios`);
        process.exit(1);
    } else if (err.code === 'EADDRINUSE') {
        console.error(`El puerto ${app.get('port')} ya esta en uso`);
        // process.exit(1);
    }
    throw err;
});

// Conexion al sokets
const socket = new WebSocket.Server({ server });
socket.on('connection', (ws) => {
    console.log('a user connected');
    ws.on('message', (msg) => {
        console.log('Mensaje desde ServiceWorker:', msg);
    });

    const stopServer = {
        type: 'stopServer',
        text: 'Se ha cerrado la sesion con Mozca',
        img: 'https://icon-icons.com/icons2/860/PNG/512/embarrass_icon-icons.com_67803.png',
    };

    const startServer = {
        type: 'startServer',
        text: 'Mozca esta levantado, disfrutalo!!',
        img: 'https://icon-icons.com/icons2/860/PNG/512/wink_icon-icons.com_67813.png',
    };


    setTimeout(() => {
        ws.send(JSON.stringify(startServer));
    }, 5000);

    setTimeout(() => {
        ws.send(JSON.stringify(stopServer));
    }, 10000);
});
