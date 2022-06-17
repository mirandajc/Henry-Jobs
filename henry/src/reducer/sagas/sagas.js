import {take,call, all, spawn} from 'redux-saga/effects';
import {watchFetchDataSaga} from './fetchDataSaga';

export function* RootSaga(){
    yield all([
        spawn(watchFetchDataSaga)
    ])
}