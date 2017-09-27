/** @jsx h */
import {h, render} from 'preact';
import Router from './router/router';


render(<Router />, document.getElementById('app'));

// in development, set up HMR:
if (module.hot) {
	require('preact/devtools');
	module.hot.accept('./router/router', () => {
		const NextRootContainer = require('./router/router');
		render(<NextRootContainer />, document.getElementById('app'));
	});
}
