export * from './actions';
let configStore;

if (process.env.NODE_ENV === 'production') {
    configStore = require('./store/configstore.prod');
} else {
    configStore = require('./store/configstore.dev');  
}

export default configStore.default;
