import {combineReducers} from 'redux';
import fetchDataReducer from './fetchDataReducer';
import fetchStudentsReducer from './fetchStudentsReducer';
import fetchInfoUserReducer from './fetchInfoUserReducer';
import fetchBusinessReducer from './fetchBusinessReducer';
import fetchPostReducer from './fetchPostReducer';

const RootReducer= combineReducers({
    fetchDataReducer,
    fetchStudentsReducer,
    fetchInfoUserReducer,
    fetchBusinessReducer,
    fetchPostReducer
});


export default RootReducer;