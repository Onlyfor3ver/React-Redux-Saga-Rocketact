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

function* loadIncrementValue(value: number) {
  console.log("12121212", value);
  yield delay(1000);
  yield put({
    type: Action.REQUEST_INCREMENT.SUCCESS,
    IncrementInfo: {
      value: 2
    } // TODO: 等待接口定义
  });
}

function* watchIncrementInfo() {
  yield takeEvery(Action.LOAD_INCREMENT, loadIncrementValue);
}

function* loadIncrementAsyncValue() {
  yield put({ type: Action.REQUEST_INCREMENT_ASYNC.PENDING });
  try {
    yield delay(1000);
    yield put({
      type: Action.REQUEST_INCREMENT_ASYNC.SUCCESS
    });
  } catch (error) {
    yield put({ type: Action.REQUEST_INCREMENT_ASYNC.FAILURE });
  }
}

function* watchIncrementAsyncInfo() {
  yield takeEvery(Action.LOAD_INCREMENT_ASYNC, loadIncrementAsyncValue);
}

export default function* rootSaga() {
  yield all([fork(watchIncrementInfo), fork(watchIncrementAsyncInfo)]);
}
