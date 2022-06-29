import { take, call, all, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { mokedFilesPublicaciones, mokedFilesPostBusiness } from '../../Components/Home/HomeForBusiness/MokedFilesPublicaciones';
import {  
    GET_PUBLICATIONS_BUSINESS,
    URL_PEDIDO,
} from '../../constants/constants';

import { getPublicationsBusinessSuccess } from '../actions/actionStudents';

//import actions 

function* asyncGetPublicationsBussines() {
    try {
        // const response= yield call(()=>axios.get(URL_PEDIDO)) // Ruta-Get-De-Publicaciones-De-Empresas
        yield put(getPublicationsBusinessSuccess(mokedFilesPostBusiness)) // reemplazar por response.data  
    } catch (error) {
        console.log(error) // getPublicationsBusinessFailure
    }
};


export function* watchFetchStudentsSaga(){
    yield takeEvery(GET_PUBLICATIONS_BUSINESS, asyncGetPublicationsBussines)
}