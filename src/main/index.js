import path from 'path';
import { app, BrowserWindow, ipcMain } from 'electron';
import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer';
// import { createMenu } from './components/index';
import { createServer, createMainWindow } from './tools';

const isDevelopment = process.env.NODE_ENV !== 'production';
let mainWindow; // Referencia global al window, necesario para evitar el recolector de basura.

console.log(process.env.NODE_ENV);
console.log('url Desarrollo', `http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`);
console.log('url Produccion', `file://${path.join(__dirname, '..', 'renderer', 'index.html')}`);


app.on('window-all-closed', () => {
    // No se cierra el programa al cerrar la venta si es MAC OS
    if (process.platform !== 'darwin') { app.quit(); }
});

app.on('activate', () => {
    // Crea ventana si no existe, util para MAC OS
    if (mainWindow === null) { mainWindow = createMainWindow(); }
});

// Evento que se ejecuta cuando electron esta listo
app.on('ready', () => {
    installExtension(REACT_DEVELOPER_TOOLS)
        .then(name => console.log(`Added Extension:  ${name}`))
        .catch(err => console.log('An error occurred: ', err));
    installExtension(REDUX_DEVTOOLS)
        .then(name => console.log(`Added Extension:  ${name}`))
        .catch(err => console.log('An error occurred: ', err));
    mainWindow = createMainWindow();
});


const server = createServer();
console.log(server);
// codigo de desarrollo servidor, necesario para la implementacion del back
server.on((msg) => {
    console.log('hijo dice: ', msg);
    // switch (msg.type) {
    // case 'post':
    //     mainWindow.send('postData', msg);
    //     break;
    // default:
    // }
});

//
ipcMain.on('serverMsg', (event, msg) => {
    switch (msg) {
    case 'capture':
        server.start().send(msg);
        event.sender.send('serverMsg', msg);
        break;
    case 'run':
        server.start().send(msg);
        event.sender.send('serverMsg', msg);
        break;
    case 'stop':
        server.stop();
        event.sender.send('serverMsg', msg);
        break;
    default:
        break;
    }
});
//
