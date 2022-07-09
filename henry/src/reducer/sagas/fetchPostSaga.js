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
    GOOGLE_LOGIN,
    SET_PREMIUM,
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

function* asyncLoginWithGoogle (payload){
    try {
        console.log("0. Estoy en sagas mi rey", payload.payload);
        const response = yield call(() => axios.post(URL_DEPLOY + "/user", payload));
        console.log("1. Soy el response antes del NEXT", response.data)
        if(response.data === "next"){
            const user = yield call(() => axios.get(URL_DEPLOY + `/mail?email=${payload.payload.email}`));
            console.log("2. Soy el user en NEXT", user.data);
            //setear user en el response del postReducer
            yield put(postUserSuccess(user.data));
            
        }
        else{
           //si no existe => response.data usuario completo
           console.log("3. soy el de google creado", response.data);
           // response.data => al response del postReducer
           yield put(postUserSuccess(response.data));
        }
    }
    catch(error){
        console.log(error);
    }
}

function* asyncSetPremium (payload){
    console.log(payload)
    try {
        /* const response = yield call(() => axios.put(URL_DEPLOY + `/user/${objeto.payload[1]}`, {premium : true}))
        yield put(updateUserSuccess(response.data)) */
    } catch (error) {
        console.log(error);
    }
};



export function* watchFetchPostSaga(){
    yield takeEvery(POST_USER, asyncPostUser)
    yield takeEvery(PROFILE_ID, getProfileByID)
    yield takeEvery(POST_REGISTER_MODAL, asyncPostRegisterModal)
    yield takeEvery(UPDATE_USER, asyncUpdateUser)
    yield takeEvery(GOOGLE_LOGIN, asyncLoginWithGoogle)
    yield takeEvery(SET_PREMIUM, asyncSetPremium)
}