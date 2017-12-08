import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ipcRenderer } from 'electron';
import store from './models';
import { DB } from './tools';
import Router from './router/router';

render(<Provider store={store}><Router /></Provider>, document.getElementById('app'));

// in development, set up HMR:
if (module.hot) {
    module.hot.accept('./router/router', () => {
        const NextRootContainer = require('./router/router');
        render(<Provider store={store}><NextRootContainer /></Provider>, document.getElementById('app'));
    });
}


// ipcRenderer.send('serverMsg', 'texto de ejemplos');

ipcRenderer.on('serverMsg', (event, msg) => {
    console.log(msg);
    const myNotif = new Notification('Mensaje del servidor recibido', { body: msg });
    myNotif.onclick = () => {
        console.log('Esto no hace nada aun');
    };
});

// const data = DB('proyect');
// console.log('=============== Base de datos:', data);

// ipcRenderer.on('postData', (event, msg) => {
//     console.log(msg);
//     data.on(() => {
//         data.add(undefined, msg);
//     });
// });


// data.on((db) => {
//     // db.add(undefined, { as: '1231', frg: '123144' }).then((data) => {
//     //     console.log('creado', data);
//     // });

//     db.findAll().then((data) => {
//         console.log('respuesta', data);
//     });

//     const obj = {
//         response: {
//             bodyUsed: true,
//             ok: true,
//             headers: null,
//             redirected: false,
//             status: 200,
//             statusText: '',
//             type: 'cors',
//             url: 'https://swapi.co/api/people/',
//             body: {
//                 count: 87,
//                 next: 'https://swapi.co/api/people/?page=2',
//                 previous: null,
//                 results: [Array],
//             },
//         },
//         request: {
//             bodyUsed: false,
//             credentials: 'omit',
//             headers: null,
//             integrity: '',
//             method: 'GET',
//             mode: 'cors',
//             referrer: 'http://localhost:3000/',
//             referrerPolicy: 'no-referrer-when-downgrade',
//             url: 'https://swapi.co/api/people/',
//         },
//         type: 'post',
//     };

//     db.find('request', obj.request).then((data) => {
//         console.log('llamada 2', data);
//     });
// });
