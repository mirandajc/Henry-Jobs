import { take, call, all, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {  
    GET_PUBLICATIONS_BUSINESS,
    URL_PEDIDO_POSTS,
    POST_ID_FOLLOW,
    GET_STUDENTS_BY_EMAIL,
    URL_PEDIDO
} from '../../constants/constants';

import { getPublicationsBusinessSuccess, postIdFollowSuccess, getStudentsByEmailSuccess } from '../actions/actionStudents';

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
        const response= yield call(()=>axios.put(URL_PEDIDO +'/follow/'+obj.payload, obj.obj)) 
        yield put(postIdFollowSuccess(response.data))
    } catch (error) {
        console.log(error)
    }
};

function* asyncGetStudentsByEmail (email) {
    try {
        const response = yield call(() => axios.get(URL_PEDIDO + `/mail?email=${email.email}`));
        yield put(getStudentsByEmailSuccess(response.data));
    } catch (error) {
        console.log(error);
    }
};


export function* watchFetchStudentsSaga(){
    yield takeEvery(GET_PUBLICATIONS_BUSINESS, asyncGetPublicationsBussines)
    yield takeEvery(POST_ID_FOLLOW, asyncPostIdFollowSuccess)
    yield takeLatest(GET_STUDENTS_BY_EMAIL, asyncGetStudentsByEmail)
}