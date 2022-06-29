import { take, call, all, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { mokedFilesPostBusiness, mokedFilesStudens, Alumnos } from '../../Components/Home/HomeForBusiness/MokedFilesPublicaciones';
import {
    getPublicationStudentsSuccess,
    getAllStudentsSuccess 
} from '../actions/actionBusiness';

import {
    GET_ALL_STUDENTS,
    GET_PUBLICATION_STUDENTS, URL_PEDIDO,
} from '../../constants/constants';


function* asyncGetPublicationStudents () {
    try {
        // const response = yield call(()=> axios.get(URL_PEDIDO))
        yield put(getPublicationStudentsSuccess(mokedFilesPostBusiness)) // reemplazar por response.data
    } catch (error) {
        console.log(error);
    }
};

function* asyncGetAllStudents () {
    try { 
        // const response = yield call(()=> axios.get(URL_PEDIDO)) // REEMPLAZAR POR LA RUTA QUE TRAE ESTUDIANTES

        yield put(getAllStudentsSuccess(Alumnos)) // reemplazar por response.data
        
    } catch (error) {
        console.log(error);
    }
};



export function* watchFetchBusinessSaga(){
    yield takeEvery(GET_PUBLICATION_STUDENTS, asyncGetPublicationStudents)
    yield takeEvery(GET_ALL_STUDENTS, asyncGetAllStudents)
}