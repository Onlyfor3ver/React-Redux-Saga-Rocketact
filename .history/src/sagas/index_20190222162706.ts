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

function* loadIncrementValue() {
  yield put({
    type: Action.REQUEST_INCREMENT.SUCCESS,
    value: 1
  });
}

function* watchIncrementInfo() {
  yield takeEvery(Action.LOAD_INCREMENT, loadIncrementValue);
}

function* loadDecrementValue() {
  console.log("1212");
  yield put({
    type: Action.LOAD_DECREMENT.SUCCESS,
    value: 1
  });
}

function* watchDecrementInfo() {
  yield takeEvery(Action.LOAD_DECREMENT, loadDecrementValue);
}

function* loadIncrementAsyncValue() {
  yield put({ type: Action.REQUEST_INCREMENT_ASYNC.PENDING });
  try {
    yield delay(1000);
    yield put({
      type: Action.REQUEST_INCREMENT_ASYNC.SUCCESS,
      value: 1
    });
  } catch (error) {
    yield put({ type: Action.REQUEST_INCREMENT_ASYNC.FAILURE });
  }
}

function* watchIncrementAsyncInfo() {
  yield takeEvery(Action.LOAD_INCREMENT_ASYNC, loadIncrementAsyncValue);
}

export default function* rootSaga() {
  yield all([
    fork(watchIncrementInfo),
    fork(watchIncrementAsyncInfo),
    fork(watchDecrementInfo)
  ]);
}
