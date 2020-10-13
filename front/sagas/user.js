import {
  all, fork, takeEvery, takeLatest, call, put, delay,
} from 'redux-saga/effects';
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE
} from '../reducers/user';
import axios from "axios";

const HELLO_SAGA = 'HELLO_SAGA';

function loginAPI() {

}

function* login() {
  try {
    // yield fork(logger); // logger 는 내 기록을 로깅하는 함수. 10초 걸림
    yield call(loginAPI);
    yield put({
      type: LOG_IN_SUCCESS,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOG_IN_FAILURE,
    });
  }
}

function* watchLogin() {
  yield takeEvery(LOG_IN_REQUEST, login);
}

function* watchSignUp() {

}

function* hello() {
  yield delay(1000);
  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
}

function* watchHello2() {
  yield takeLatest(HELLO_SAGA, hello);
}

function signUpApi(){
  return axios.post("/login");
}

function* signup(){
  try{
    yield call(signUpApi);
    yield put({
      type: SIGN_UP_SUCCESS,
    })
  }catch (e){
    console.error(e);
    yield put({
      type: SIGN_UP_FAILURE
    })
  }
}

function* watchSignUp(){
  yield takeEvery(SIGN_UP_REQUEST, signup);
}

export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchHello2),
  ]);
}
