import { takeLatest, takeEvery } from 'redux-saga/effects';
import createApi from '../requests';
import * as ActionTypes from '../actions';
import * as sagasUser from './user/saga_user';


const innorlate = createApi();

export default function* () {
    yield [
        takeLatest(ActionTypes.LOGIN, sagasUser.login, innorlate),
        takeLatest(ActionTypes.CREATE_USER, sagasUser.createUser, innorlate),
    ]
}