import { all, fork, takeEvery, takeLatest, call, put, take, delay } from "@redux-saga/core/effects";
import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE } from "../reducers/user";

const HELLO_SAGA = "HELLO_SAGA";

function loginAPI(){

}

function* login(){
    try{
        // yield fork(logger); // logger 는 내 기록을 로깅하는 함수. 10초 걸림
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
    yield takeEvery(LOG_IN_REQUEST, login);
}

function* watchSignUp(){

}

function* hello(){
    yield delay(1000);
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
}

function* watchHello2(){
    yield takeLatest(HELLO_SAGA, hello);
}


export default function* userSaga(){
    yield all([
        fork(watchLogin),
        fork(watchHello2)
    ]);
}
