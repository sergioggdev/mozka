'use strict';
import path from 'path';
import { app, BrowserWindow, ipcMain } from 'electron';
import { createMenu } from './components/index';
import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer';
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


// codigo de desarrollo servidor, necesario para la implementacion del back
// createServer().on((msg) => {
//     console.log(msg);
//     switch (msg.type) {
//     case 'post':
//         mainWindow.send('postData', msg);
//         break;
//     default:
//         console.log('hijo dice: ', msg);
//     }
// }).send('Hola Hijo :)');


//
// ipcMain.on('serverMsg', (event, msg) => {
//     event.sender.send('serverMsg', msg);
//     if (false) {
//         let server1 = createServer();
//         server1.send('hola holita');
//         server1.on(msg => {
//             console.log('hijo dice: ', msg);
//         })
//     }
// });
//