'use strict';
import path from 'path';
import { app, BrowserWindow, ipcMain } from 'electron';
import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer';
import { createServer } from './tools';
const isDevelopment = process.env.NODE_ENV !== 'production';

console.log(process.env.NODE_ENV);
console.log('url Desarrollo', `http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`);
console.log('url Produccion', `file://${path.join(__dirname, '..', 'renderer', 'index.html')}`);

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


// codigo de desarrollo servidor, necesario para la implementacion del back
const server1 = createServer();
server1.send('hola hijo');
server1.on((msg) => {
    if (msg.type === 'post') {
        console.log('envio de datos', msg);
    } else {
        console.log('hijo dice: ', msg);
    }
});
// ///////////////////////////////////////////////////////////////////////////


let mainWindow; // Referencia global a la ventana principal, necesario para evitar el recolector de basura.
let contents;
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
    contents = mainWindow.webContents;

    setInterval(() => {
        contents.reload();
    }, 5000);
});


// //////////////////////////////////////////////////////////////////////////////////////////
function createMainWindow() {
    // Constructor de la ventana princpal
    let win = new BrowserWindow({
        width: 1000,
        height: 700,
        minWidth: 500,
        minHeight: 400,
        title: 'Mozka',
        icon: path.join(__dirname, 'img', 'Mozka-logo.png'),
        frame: true,
    });

    let url = isDevelopment ? `http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`: `file://${path.join(__dirname, '..', 'renderer', 'index.html')}`;

    if (isDevelopment) { win.webContents.openDevTools(); }

    win.loadURL(url);

    win.on('closed', () => {
        mainWindow = null;
    });

    win.webContents.on('devtools-opened', () => {
        win.focus();
        setImmediate(() => {
            win.focus();
        });
    });

    return win;
}
