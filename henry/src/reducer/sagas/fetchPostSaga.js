import { take, call, all, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { mokedFilesPublicaciones } from '../../Components/Home/HomeForBusiness/MokedFilesPublicaciones';
import {
    getPokemonFailure,
    getPokemonLoading, 
    getPokemonSuccess, 
} from '../actions/actionPost';

import { 
    API_POKEMON, 
    SEND_REQUEST, 
    GET_STUDENTS, 
} from '../../constants/constants';

//import actions 

function* asyncFetchRequest(){
    try{
        yield put(getPokemonLoading(true))
        const response= yield call(()=>axios.get(API_POKEMON))
        yield put(getPokemonSuccess(response.data))
        console.log(response.data)

    }catch(error){
        yield (getPokemonFailure(error))
    }finally{
        yield put(getPokemonLoading(false))
    }
}



export function* watchFetchPostSaga(){
    yield takeEvery(SEND_REQUEST, asyncFetchRequest)
    yield takeEvery(GET_STUDENTS, asyncGetStudents)
}