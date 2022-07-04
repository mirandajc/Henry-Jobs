import { take, call, all, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
    getInfoForStaffSuccess
} from '../actions/actionStaff';

import {
    GET_INFO_FOR_STAFF,
    URL_PEDIDO
} from '../../constants/constants';


function* asynGetInfoForStaff () {
    try {
        const responseUsers = yield call(()=> axios.get(URL_PEDIDO+'/user'))
        const responsePubli = yield call(()=> axios.get(URL_PEDIDO+'/post'))
        yield put(getInfoForStaffSuccess({users: responseUsers.data, publications: responsePubli.data})) // reemplazar por response.data
    } catch (error) {
        console.log(error);
    }
};



export function* watchFetchSaffSaga(){
    yield takeEvery(GET_INFO_FOR_STAFF, asynGetInfoForStaff)
}