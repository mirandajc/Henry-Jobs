import {take,call, all, spawn} from 'redux-saga/effects';
import {watchFetchDataSaga} from './fetchDataSaga';
import { watchFetchStudentsSaga } from './fetchStudentsSaga';
import { watchFetchPostSaga } from './fetchPostSaga';
import { watchFetchBusinessSaga } from './fetchBusinessSaga'

export function* RootSaga(){
    yield all([
        spawn(watchFetchDataSaga),
        spawn(watchFetchStudentsSaga),
        spawn(watchFetchPostSaga),
        spawn(watchFetchBusinessSaga)
    
    ])
}