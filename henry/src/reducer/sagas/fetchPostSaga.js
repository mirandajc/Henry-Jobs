import { take, call, all, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
    getInfoUserSuccess,
    postRegisterModalSuccess,
    postUserSuccess,
    profileSuccess,
} from '../actions/actionPost';
import { 
    GET_INFO_USER, 
    URL_PEDIDO_USER,
    POST_USER,
    POST_USER_SUCCESS,
    URL_POST,
    SET_LOGOUT,
    PROFILE_ID,
    URL_PROFILE,
    PROFILE_SUCCESS,
    POST_REGISTER_MODAL,
    URL_DEPLOY
} from '../../constants/constants';

let userInfo = {
    userType: 1,
    premium: true,
    isRegistered: true,
};


//axios.defaults.headers.post['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;

function* asyncInfoUser (value) {
    try {
        // const response = yield call(() => axios(URL_PEDIDO_USER+value)); // TODAVIA NO CONOCEMOS LA RUTA
                                                                            // llevar mail y password al back
        yield put(getInfoUserSuccess(userInfo, value)); // response.data
    } catch (error) {
        console.log(error);
    }
};

function* asyncPostUser (user){
    
    try{
        const response = yield call(()=>(axios.post(URL_POST, user.payload)));
        // const codedTK= response.data;
        // localStorage.setItem('codedTK',JSON.stringify(codedTK));
        
        yield put(postUserSuccess(response.data))
    }catch(error){
        console.log(error)
    }finally{}

}

function* getProfileByID(id){
    try{
        const response= yield call(()=>axios.get(URL_PROFILE+`${id.payload}`))
        console.log(response)
        
        yield put(profileSuccess(response.data))

    }catch(error){
        console.log(error)
    }
}

function* asyncPostRegisterModal(RegisterUser){ // datos del registro modal
    console.log("llegue a lo asincrono", RegisterUser);
    try {
        const response = yield call(() => axios.post(URL_DEPLOY + "/user", RegisterUser));
        console.log(RegisterUser)
        console.log(response.data)
        yield put(postRegisterModalSuccess((response).data));
    } catch (error) {
        console.log(error);      
    }
};





export function* watchFetchPostSaga(){
    yield takeEvery(GET_INFO_USER, asyncInfoUser)
    yield takeEvery(POST_USER, asyncPostUser)
    yield takeEvery(PROFILE_ID, getProfileByID)
    yield takeEvery(POST_REGISTER_MODAL, asyncPostRegisterModal)
   
}