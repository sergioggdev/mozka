import React from 'react';
import { render } from 'react-dom';
import Router from './router/router';

render(<Router />, document.getElementById('app'));

// in development, set up HMR:
if (module.hot) {
	module.hot.accept('./router/router', () => {
		const NextRootContainer = require('./router/router');
		render(<NextRootContainer />, document.getElementById('app'));
	});
}