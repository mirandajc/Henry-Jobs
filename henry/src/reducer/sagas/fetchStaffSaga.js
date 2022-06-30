import { take, call, all, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { mokedFilesPostBusiness, Alumnos } from '../../Components/Home/HomeForBusiness/MokedFilesPublicaciones';
import {
    getInfoForStaffSuccess
} from '../actions/actionStaff';

import {
    GET_INFO_FOR_STAFF
} from '../../constants/constants';


function* asynGetInfoForStaff () {
    try {
        // const responseUsers = yield call(()=> axios.get(URL_PEDIDO)) todos los users
        // const responsePubli = yield call(()=> axios.get(URL_PEDIDO)) todas las publicaciones
        // yield put(getInfoForStaffSuccess({users: responseUsers, publications: responsePubli})) // reemplazar por response.data
        yield put(getInfoForStaffSuccess({users: Alumnos, publications: mokedFilesPostBusiness})) // ELIMINAR ESTA LINEA
    } catch (error) {
        console.log(error);
    }
};



export function* watchFetchSaffSaga(){
    yield takeEvery(GET_INFO_FOR_STAFF, asynGetInfoForStaff)
}