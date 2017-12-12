

export default (dbName) => {
    const dbVersion = 1; // Declara la version de tu DB.

    /* Clase para el ORM */
    class IndexDB {
        constructor(name, version) {
            this.dbName = name;
            this.version = version;
            this.request = indexedDB.open(this.dbName, this.version);
            this.status = this.request.readyState;
            this.stores = null;
            this.db = null;
            this.init();
        }

        init() {
            this.request.onupgradeneeded = (data) => { // Gestiona la creacion/actualizacion de la DB.
                console.log('on-upgrade', data);
                // data.target.result.deleteObjectStore('customers');
                const storeServices = this.request.result.createObjectStore('services', { autoIncrement: true }); // Creamos un almacen
                storeServices.createIndex('request', 'request', { unique: false }); // Creamos un indice para buscar
                storeServices.createIndex('response', 'response', { unique: false }); // Creamos un indice para buscar

                this.request.result.createObjectStore('mocks', { autoIncrement: true }) // Creamos un almacen
                    .createIndex('name', 'name', { unique: false }); // Creamos un indice para buscar
            };
            this.request.onerror = (err) => { // Callback cuando hay errores
                console.error('================= Error DB:', err);
            };
            this.request.onsuccess = (event) => {
                this.onSuccess(event);
            };
        }

        onSuccess(event) {
            console.log('on-success', event);
            this.db = this.request.result;
            this.status = this.request.readyState;
            this.stores = this.db.objectStoreNames;
        }

        on(callBack) {
            if (this.status === 'done') {
                console.log('entra en el done');
                callBack(this);
            } else {
                this.request.onsuccess = (event) => {
                    this.onSuccess(event);
                    callBack(this);
                };
            }
            return this;
        }

        add(dbStore = 'services', obj) {
            return new Promise((resolve) => {
                this.db.transaction(dbStore, 'readwrite').objectStore(dbStore).add(obj).onsuccess = (event) => {
                    resolve(event.target.result);
                };
            });
        }

        findAll(dbStore = 'services') {
            return new Promise((resolve) => {
                this.db.transaction(dbStore).objectStore(dbStore).getAll().onsuccess = (event) => {
                    resolve(event.target.result);
                };
            });
        }

        find(index, string, dbStore = 'services') {
            debugger;
            return new Promise((resolve) => {
                this.db.transaction(dbStore).objectStore(dbStore).index(index).get(string).onsuccess = (event) => {
                    resolve(event.target.result);
                };
            });
        }

        get(number, dbStore = 'services') {
            return new Promise((resolve) => {
                this.db.transaction(dbStore).objectStore(dbStore).get(number).onsuccess = (event) => {
                    resolve(event.target.result);
                };
            });
        }

        update(dbStore = 'services', obj) {
            return new Promise((resolve) => {
                this.db.transaction(dbStore, 'readwrite').objectStore(dbStore).put(obj).onsuccess = (event) => {
                    resolve(event.target.result);
                };
            });
        }

        delete(dbStore = 'services') {
            return new Promise((resolve) => {
                this.db.transaction(dbStore, 'readwrite').objectStore(dbStore).delete().onsuccess = (event) => {
                    resolve(event.target.result);
                };
            });
        }
    }

    if (window.indexedDB) {
        return new IndexDB(dbName, dbVersion);
    }
    return null;
};

// db.onerror = function(event) {
//   alert("Database error: " + event.target.errorCode);
// };
