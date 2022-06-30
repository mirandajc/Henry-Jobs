import { take, call, all, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
    getInfoUserSuccess,
    postUserSuccess
} from '../actions/actionPost';
import { 
    GET_INFO_USER, 
    URL_PEDIDO_USER,
    POST_USER,
    POST_USER_SUCCESS,
    URL_POST
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

function* asyncPostUser(user){
    try{
        const response = yield call(()=>axios.post(URL_POST, user));

        yield put(postUserSuccess(response.data))
    }catch(error){
        console.log(error)
    }finally{}

}


export function* watchFetchPostSaga(){
    yield takeEvery(GET_INFO_USER, asyncInfoUser)
    yield takeEvery(POST_USER, asyncPostUser)

}