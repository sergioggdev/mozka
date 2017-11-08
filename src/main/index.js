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
ipcMain.on('serverMsg', (event, msg) => {
  event.sender.send('serverMsg', msg);

  if (false) {
    let server1 = createServer();
    server1.send('hola holita');
    server1.on(msg => {
      console.log('hijo dice: ', msg)
    })
  }

});
//

let mainWindow; // Referencia global a la ventana principal, necesario para evitar el recolector de basura.

app.on('window-all-closed', () => {
  // No se cierra el programa al cerrar la venta si es MAC OS
<<<<<<< HEAD
  if (process.platform !== 'darwin') {app.quit();}
=======
  if (process.platform !== 'darwin') { app.quit(); }
>>>>>>> work-sgarciaga
});

app.on('activate', () => {
  // Crea ventana si no existe, util para MAC OS
<<<<<<< HEAD
  if (mainWindow === null) {mainWindow = createMainWindow();}
=======
  if (mainWindow === null) { mainWindow = createMainWindow(); }
>>>>>>> work-sgarciaga
});

// Evento que se ejecuta cuando electron esta listo
app.on('ready', () => {
<<<<<<< HEAD
  BrowserWindow.addDevToolsExtension(path.join(__dirname, '..', '..','tools', 'react'));
  BrowserWindow.addDevToolsExtension(path.join(__dirname, '..', '..','tools', 'redux'));
=======
  installExtension(REACT_DEVELOPER_TOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));
  installExtension(REDUX_DEVTOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));
>>>>>>> work-sgarciaga
  mainWindow = createMainWindow();
});


////////////////////////////////////////////////////////////////////////////////////////////
function createMainWindow () {
  // Constructor de la ventana princpal
  let win = new BrowserWindow({
<<<<<<< HEAD
    width: 600,
    height: 600,
=======
    width: 1000,
    height: 700,
>>>>>>> work-sgarciaga
    minWidth: 500,
    minHeight: 400,
    title: 'Mozka',
    icon: path.join(__dirname, 'img', 'Mozka-logo.png'),
<<<<<<< HEAD
    frame: false
  });
 
  let url = isDevelopment? 'http://localhost:9080': `file://${__dirname}/index.html`;
  win.loadURL(url);
  if (isDevelopment) { win.webContents.openDevTools(); }

=======
    frame: true
  });
 
  let url = isDevelopment? `http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`: `file://${path.join(__dirname, '..', 'renderer', 'index.html')}`;

  if (isDevelopment) { win.webContents.openDevTools(); }

  win.loadURL(url);
  
>>>>>>> work-sgarciaga
  win.on('closed', () => {
    mainWindow = null;
  });

<<<<<<< HEAD
=======
  win.webContents.on('devtools-opened', () => {
    win.focus();
    setImmediate(() => {
      win.focus();
    });
  });

>>>>>>> work-sgarciaga
  return win;
}
