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

let myNotification = new Notification('Importante!!', {
	body: 'Acabas de iniciar Mozca, la mejor aplicacion de Mocks'
})


ipcRenderer.send('asynchronous-message', 'ping');

ipcRenderer.on('asynchronous-reply', (event, arg) => {
	console.log(arg) // prints "pong"
  })