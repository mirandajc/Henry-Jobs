import { take, call, all, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {  
    GET_PUBLICATIONS_BUSINESS,
    URL_PEDIDO_POSTS,
    POST_ID_FOLLOW
} from '../../constants/constants';

import { getPublicationsBusinessSuccess, postIdFollowSuccess } from '../actions/actionStudents';

//import actions 

function* asyncGetPublicationsBussines() {
    try {
        const response= yield call(()=>axios.get(URL_PEDIDO_POSTS)) 
        yield put(getPublicationsBusinessSuccess(response.data)) 
    } catch (error) {
        console.log(error) 
    }
};

function* asyncPostIdFollowSuccess(obj) {
    try {
        const response= yield call(()=>axios.put(/* URL_PEDIDO */'http://localhost:3002/api'+'/follow/'+obj.payload, obj.obj)) 
        yield put(postIdFollowSuccess(response.data))
    } catch (error) {
        console.log(error)
    }
};


export function* watchFetchStudentsSaga(){
    yield takeEvery(GET_PUBLICATIONS_BUSINESS, asyncGetPublicationsBussines)
    yield takeEvery(POST_ID_FOLLOW, asyncPostIdFollowSuccess)
}