import { all, fork, takeEvery, takeLatest, call, put, take, delay } from "@redux-saga/core/effects";
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
    while(true){
        yield take(LOG_IN);
        yield put({
            type: LOG_IN_SUCCESS
        })
    }
}

function* watchSignUp(){

}

function* watchHello2(){
    yield takeLatest(HELLO_SAGA, function*(){
        yield delay(1000);
        console.log(1);
        console.log(2);
        console.log(3);
        console.log(4);
    });
}

function* watchHello(){
    console.log("before saga");
    while(true){
        yield take(HELLO_SAGA);
        console.log("hello saga (after)");
    }
}

export default function* userSaga(){
    yield all([
        watchLogin(),
        watchHello2()
    ]);
}
