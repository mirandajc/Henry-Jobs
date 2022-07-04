import { take, call, all, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {  
    GET_PUBLICATIONS_BUSINESS,
    URL_PEDIDO_POSTS,
} from '../../constants/constants';

import { getPublicationsBusinessSuccess } from '../actions/actionStudents';

//import actions 

function* asyncGetPublicationsBussines() {
    try {
        const response= yield call(()=>axios.get(URL_PEDIDO_POSTS)) 
        yield put(getPublicationsBusinessSuccess(response.data)) // reemplazar por response.data  
    } catch (error) {
        console.log(error) // getPublicationsBusinessFailure
    }
};


export function* watchFetchStudentsSaga(){
    yield takeEvery(GET_PUBLICATIONS_BUSINESS, asyncGetPublicationsBussines)
    
}