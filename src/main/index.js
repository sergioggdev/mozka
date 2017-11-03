'use strict';
console.log(process.env.NODE_ENV);
import { app, BrowserWindow } from 'electron';
import path from 'path';
import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer';
const isDevelopment = process.env.NODE_ENV !== 'production';

let mainWindow; // Referencia global a la ventana principal, necesario para evitar el recolector de basura.

app.on('window-all-closed', () => {
  // No se cierra el programa al cerrar la venta si es MAC OS
  if (process.platform !== 'darwin') {app.quit();}
});

app.on('activate', () => {
  // Crea ventana si no existe, util para MAC OS
  if (mainWindow === null) {mainWindow = createMainWindow();}
});

// Evento que se ejecuta cuando electron esta listo
app.on('ready', () => {
  installExtension(REACT_DEVELOPER_TOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));
  installExtension(REDUX_DEVTOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));
  mainWindow = createMainWindow();
});


////////////////////////////////////////////////////////////////////////////////////////////
function createMainWindow () {
  // Constructor de la ventana princpal
  let win = new BrowserWindow({
    width: 700,
    height: 600,
    minWidth: 500,
    minHeight: 400,
    title: 'Mozka',
    icon: path.join(__dirname, 'img', 'Mozka-logo.png'),
    frame: true
  });
 
  let url = isDevelopment? 'http://localhost:9080': `file://${__dirname}/index.html`;
  win.loadURL(url);
  if (isDevelopment) { win.webContents.openDevTools(); }

  win.on('closed', () => {
    mainWindow = null;
  });

  return win;
}
