import { take, call, all, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { mokedFilesPostBusiness, mokedFilesStudens, Alumnos } from '../../Components/Home/HomeForBusiness/MokedFilesPublicaciones';
import {
    getPublicationStudentsSuccess,
    getAllStudentsSuccess, 
    postIdFollowBusssSuccess,
    getMyPublicationsSuccess,
    getBusinessByEmailSuccess,
    sendNudesSuccess
} from '../actions/actionBusiness';

import {
    GET_ALL_STUDENTS,GET_BUSINESS_BY_EMAIL,SEND_NUDES,
    GET_PUBLICATION_STUDENTS, URL_PEDIDO,GET_MY_PUBLICATIONS, URL_PEDIDO_POSTS,SET_APPLICANT,POST_ID_FOLLOW_BUSS
} from '../../constants/constants';


function* asyncGetPublicationStudents (payload) {
    try {
        const response = yield call(()=> axios.get(URL_PEDIDO+'/post'))
        yield put(getPublicationStudentsSuccess(response.data, payload)) // reemplazar por response.data
    } catch (error) {
        console.log(error);
    }
};

function* asyncGetAllStudents () {
    try { 
        const response = yield call(()=> axios.get(URL_PEDIDO+'/user')) // REEMPLAZAR POR LA RUTA QUE TRAE ESTUDIANTES
        yield put(getAllStudentsSuccess(response.data)) // reemplazar por response.data  
    } catch (error) {
        console.log(error);
    }
};

function* asyncPostIdFollowBuss (obj) {
    try {
        const response = yield call(()=> axios.put(URL_PEDIDO +'/follow/'+obj.payload, obj.obj))
        yield put(postIdFollowBusssSuccess(response.data)) // reemplazar por response.data      
    } catch (error) {
        console.log(error)
    }
}

function* asyncGetMyPublications (id) {
    try {
        const response = yield call(() => axios.get(URL_PEDIDO_POSTS))
        yield put(getMyPublicationsSuccess(response.data, id.payload))
    } catch (error) {
        console.log(error);
    }
};

function* asyncGetBusinessByEmail (email) {
    try {
        const response = yield call(() => axios.get(URL_PEDIDO + `/mail?email=${email.email}`))
        yield put(getBusinessByEmailSuccess(response.data));
    } catch (error) {
        console.log(error)
    }
};

function* asyncSendNudes (payload) {
    try { 
       const response = yield call(() => axios.put(URL_PEDIDO_POSTS +'/apply/'+ payload.idp , payload.payload))
       yield put(sendNudesSuccess(response.data));
    } catch (error) {
        console.log(error)
    }
};



export function* watchFetchBusinessSaga(){
    yield takeEvery(GET_PUBLICATION_STUDENTS, asyncGetPublicationStudents)
    yield takeLatest(GET_ALL_STUDENTS, asyncGetAllStudents)
    yield takeEvery(POST_ID_FOLLOW_BUSS ,asyncPostIdFollowBuss)
    yield takeEvery(GET_MY_PUBLICATIONS, asyncGetMyPublications)
    /* yield takeEvery(SET_APPLICANT, asyncSetApplicant) */
    yield takeLatest(GET_BUSINESS_BY_EMAIL, asyncGetBusinessByEmail)
    yield takeEvery(SEND_NUDES, asyncSendNudes)
}