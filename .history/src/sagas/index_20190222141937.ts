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
    incrementInfo: {
      title: "Hello Saga"
    } // TODO: 等待接口定义
  });
}

function* watchSagaInfo() {
  yield takeEvery(Action.LOAD_INCREMENT, incrementInfo);
}

export default function* rootSaga() {
  yield all([fork(watchSagaInfo)]);
}
