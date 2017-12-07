import { combineReducers } from 'redux';
import router from './routereducer';
import proyect from './proyectreducer';

export default combineReducers({
    router,
    proyect,
});
