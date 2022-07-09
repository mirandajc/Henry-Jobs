import { take, call, all, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import {
    postRegisterModalSuccess,
    postUserSuccess,
    profileSuccess,
    updateUserSuccess
} from '../actions/actionPost';
import { 
    POST_USER,
    URL_POST,
    PROFILE_ID,
    URL_PROFILE,
    POST_REGISTER_MODAL,
    URL_DEPLOY,
    UPDATE_USER,
    SET_PREMIUM,
    EDIT_PROFILE,
    PROFILE_EDIT_URL
} from '../../constants/constants';

function* asyncPostUser (user){
    
    try{
        const response = yield call(() => (axios.post(URL_POST, user.payload)));
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
        yield put(profileSuccess(response.data))

    }catch(error){
        console.log(error)
    }
}

function* asyncPostRegisterModal(RegisterUser){ // datos del registro modal
    console.log("llegue a lo asincrono", RegisterUser);
    try {
        const response = yield call(() => axios.post(URL_DEPLOY + "/user", RegisterUser));
        yield put(postRegisterModalSuccess((response).data));
    } catch (error) {
        console.log(error);      
    }
};

function* asyncUpdateUser (objeto){
    try {
        const response = yield call(() => axios.put(URL_DEPLOY + `/user/${objeto.payload[1]}`, objeto.payload[0]))
        yield put(updateUserSuccess(response.data))
    } catch (error) {
        console.log(error);
    }
};

function* asyncSetPremium (payload){
    
    try {
        const response = yield call(() => axios.put(URL_DEPLOY + `/user/${payload.payload}`, payload.payload))
        console.log(response)
        // yield put(updateUserSuccess(response.data)) 
    } catch (error) {
        console.log(error);
    }
};

function* asyncEditProfile(payload){
    //AGREGAR OBJ DE PERFIL
    try{
        const response= yield call(()=> axios.put(PROFILE_EDIT_URL+ `${payload.payload}`))

    }catch(error){
        console.log(error)
    }
}



export function* watchFetchPostSaga(){
    yield takeEvery(POST_USER, asyncPostUser)
    yield takeEvery(PROFILE_ID, getProfileByID)
    yield takeEvery(POST_REGISTER_MODAL, asyncPostRegisterModal)
    yield takeEvery(UPDATE_USER, asyncUpdateUser)
    yield takeEvery(SET_PREMIUM, asyncSetPremium)
    yield takeEvery(EDIT_PROFILE, asyncEditProfile)
}