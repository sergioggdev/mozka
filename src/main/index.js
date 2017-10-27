'use strict';
console.log(process.env.NODE_ENV);
import { app, BrowserWindow } from 'electron';
import path from 'path';
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
  BrowserWindow.addDevToolsExtension(path.join(__dirname, '..', '..','tools', 'react'));
  BrowserWindow.addDevToolsExtension(path.join(__dirname, '..', '..','tools', 'redux'));
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
