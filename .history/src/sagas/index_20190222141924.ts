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

function* loadIncrement() {
  yield delay(1000);
  yield put({
    type: Action.LOAD_INCREMENT.SUCCESS,
    IncrementInfo: {
      title: "Hello Saga"
    } // TODO: 等待接口定义
  });
}

function* watchSagaInfo() {
  yield takeEvery(Action.LOAD_INCREMENT, IncrementInfo);
}

export default function* rootSaga() {
  yield all([fork(watchSagaInfo)]);
}
