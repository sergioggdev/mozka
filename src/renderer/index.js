import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './models';
import Router from './router/router';

render(<Provider store={store}><Router/></Provider>, document.getElementById('app'));

// in development, set up HMR:
if (module.hot) {
	module.hot.accept('./router/router', () => {
		const NextRootContainer = require('./router/router');
		render(<Provider store={store}><NextRootContainer/></Provider>, document.getElementById('app'));
	});
}



import { ipcRenderer } from 'electron';
ipcRenderer.send('serverMsg', 'texto de ejemplos');

ipcRenderer.on('serverMsg', (event, msg) => {
	let myNotif = new Notification('Mensaje del servidor recibido', { body: msg })
	myNotif.onclick = () => {
		console.log('Esto no hace nada aun');
	}
  })
