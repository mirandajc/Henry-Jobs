import{take,call,all,put,takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import{getPokemonFailure, getPokemonLoading, getPokemonSuccess} from '../actions/action';
import { API_POKEMON, SEND_REQUEST } from '../../constants/constants';
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

export function* watchFetchDataSaga(){
    yield takeEvery(SEND_REQUEST, asyncFetchRequest)
}