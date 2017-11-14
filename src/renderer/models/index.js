export * from './actions';
if (process.env.NODE_ENV === 'production') {
  var configStore = require('./store/configstore.prod');
} else {
  var configStore = require('./store/configstore.dev');  
}

export default configStore.default; 
