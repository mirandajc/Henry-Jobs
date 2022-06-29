import {combineReducers} from 'redux';
import fetchStudentsReducer from './fetchStudentsReducer';
import fetchInfoUserReducer from './fetchInfoUserReducer';
import fetchBusinessReducer from './fetchBusinessReducer';
import fetchPostReducer from './fetchPostReducer';

const RootReducer= combineReducers({
    fetchStudentsReducer,
    fetchInfoUserReducer,
    fetchBusinessReducer,
    fetchPostReducer
});


export default RootReducer;