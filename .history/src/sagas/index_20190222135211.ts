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

function* loadSagaInfo() {
  yield put({
    type: Action.REQUEST_SAGAINFO.SUCCESS,
    helloInfo: {
      title: "Hello Saga"
    } // TODO: 等待接口定义
  });
}

function* watchSagaInfo() {
  yield takeEvery(Action.LOAD_SAGAINFO, loadSagaInfo);
}

function* helloSaga() {
  console.log("Hello Sagas!");
}

export default function* rootSaga() {
  yield all([fork(watchSagaInfo)]);
}
