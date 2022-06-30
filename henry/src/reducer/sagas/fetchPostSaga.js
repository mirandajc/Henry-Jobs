import { take, call, all, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
    getInfoUserSuccess 
} from '../actions/actionPost';
import { 
    GET_INFO_USER, 
    URL_PEDIDO_USER
} from '../../constants/constants';

let userInfo = {
    userType: 5,
    premium: true,
    isRegistered: true,
};


//import actions 

function* asyncInfoUser (value) {
    console.log(value);
    try {
        // const response = yield call(() => axios(URL_PEDIDO_USER+value)); // TODAVIA NO CONOCEMOS LA RUTA
                                                                            // llevar mail y password al back
        yield put(getInfoUserSuccess(userInfo, value)); // response.data
    } catch (error) {
        console.log(error);
    }
};


export function* watchFetchPostSaga(){
    yield takeEvery(GET_INFO_USER, asyncInfoUser)

}