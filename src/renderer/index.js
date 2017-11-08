import React from 'react';
import { render } from 'react-dom';
import Router from './router/router';
import { ipcRenderer } from 'electron';

render(<Router />, document.getElementById('app'));

// in development, set up HMR:
if (module.hot) {
	module.hot.accept('./router/router', () => {
		const NextRootContainer = require('./router/router');
		render(<NextRootContainer />, document.getElementById('app'));
	});
}




ipcRenderer.send('serverMsg', 'texto de ejemplos');

ipcRenderer.on('serverMsg', (event, msg) => {
	let myNotif = new Notification('Mensaje del servidor recibido', { body: msg })
	myNotif.onclick = () => {
		console.log('Esto no hace nada aun');
	}
  })
