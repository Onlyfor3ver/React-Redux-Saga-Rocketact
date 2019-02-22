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

function* watchCartInfo() {
  yield takeEvery(Action.LOAD_HELLOINFO, loadHelloInfo);
}

helloSaga() {
  console.log("Hello Sagas!");
}

export default function* rootSaga() {
  yield all([fork(watchCartInfo)]);
}
