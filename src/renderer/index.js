import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ipcRenderer } from 'electron';
import store from './models';
import Router from './router/router';

render(<Provider store={store}><Router /></Provider>, document.getElementById('app'));

// in development, set up HMR:
if (module.hot) {
    module.hot.accept('./router/router', () => {
        const NextRootContainer = require('./router/router');
        render(<Provider store={store}><NextRootContainer /></Provider>, document.getElementById('app'));
    });
}


ipcRenderer.send('serverMsg', 'texto de ejemplos');

ipcRenderer.on('serverMsg', (event, msg) => {
    let myNotif = new Notification('Mensaje del servidor recibido', { body: msg });
    myNotif.onclick = () => {
        console.log('Esto no hace nada aun');
    }
});

ipcRenderer.on('postData', (event, msg) => {
    console.log(msg);
});


// ///////////////////////////////////////////////////////////////////////////////////////////
// En la siguiente linea, puede incluir prefijos de implementacion que quiera probar.
// window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
// No use "var indexedDB = ..." Si no está en una función.
// Por otra parte, puedes necesitar referencias a algun objeto window.IDB*:
// window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
// window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
// (Mozilla nunca ha prefijado estos objetos, por lo tanto no necesitamos window.mozIDB*)

/* if (!window.indexedDB) {
    window.alert("Su navegador no soporta una versión estable de indexedDB.Tal y como las características no serán validas");
}

var db;
var request = indexedDB.open("MyTestDatabase");
request.onerror = function(event) {
  alert("Why didn't you allow my web app to use IndexedDB?!");
};
request.onsuccess = function(event) {
  db = request.result;
};

db.onerror = function(event) {
    // Generic error handler for all errors targeted at this database's
    // requests!
    alert("Database error: " + event.target.errorCode);
  };

  // Este evento solamente está implementado en navegadores recientes
request.onupgradeneeded = function(event) { 
    var db = event.target.result;
  
    // Crea un almacén de objetos (objectStore) para esta base de datos
    var objectStore = db.createObjectStore("name", { keyPath: "myKey" });
  };



  const dbName = "the_name";
  
  var request = indexedDB.open(dbName, 2);
  
  request.onerror = function(event) {
    // Manejar errores.
  };
  request.onupgradeneeded = function(event) {
    var db = event.target.result;
  
    // Se crea un almacén para contener la información de nuestros cliente
    // Se usará "ssn" como clave ya que es garantizado que es única
    var objectStore = db.createObjectStore("customers", { keyPath: "ssn", autoIncrement : true });
  
    // Se crea un índice para buscar clientes por nombre. Se podrían tener duplicados
    // por lo que no se puede usar un índice único.
    objectStore.createIndex("name", "name", { unique: false });
  
    // Se crea un índice para buscar clientespor email. Se quiere asegurar que
    // no puedan haberdos clientes con el mismo email, asi que se usa un índice único.
    objectStore.createIndex("email", "email", { unique: true });
  
    // Se usa transaction.oncomplete para asegurarse que la creación del almacén 
    // haya finalizado antes de añadir los datos en el.
    objectStore.transaction.oncomplete = function(event) {
      // Guarda los datos en el almacén recién creado.
      var customerObjectStore = db.transaction("customers", "readwrite").objectStore("customers");
      for (var i in customerData) {
        customerObjectStore.add(customerData[i]);
      }
    }
  };
 */