import {
  all,
  fork,
  put,
  take,
  takeEvery,
  select,
  call,
  delay
} from "redux-saga/effects";

import * as Action from "../actions";

function* loadCartInfo() {
  yield put({
    type: Action.REQUEST_HELLOINFO.SUCCESS,
    helloInfo: {} // TODO: 等待接口定义
  });
}

export function* helloSaga() {
  console.log("Hello Sagas!");
}

function* watchCartInfo() {
  yield takeEvery(Action.LOAD_HELLOINFO, loadHelloInfo);
}

export default function* rootSaga() {
  yield all([fork(watchCartInfo)]);
}
