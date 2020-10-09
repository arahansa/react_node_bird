import { all, fork, takeLatest, call, put, take } from "@redux-saga/core/effects";
import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILURE } from "../reducers/user";

const HELLO_SAGA = "HELLO_SAGA";

function loginAPI(){

}

function* login(){
    try{
        yield call(loginAPI);
        yield put({
            type: LOG_IN_SUCCESS,
        })
    }catch(e){
        console.error(e);
        yield put({
            type: LOG_IN_FAILURE
        })
    }
}

function* watchLogin(){
    yield takeLatest(LOG_IN, login);
}

function* helloSaga(){
    console.log("before saga");
    while(true){
        yield take(HELLO_SAGA);
        console.log("hello saga (after)");
    }
}

export default function* userSaga(){
    yield helloSaga();
}