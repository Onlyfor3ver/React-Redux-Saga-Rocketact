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
  console.log("12121212");
  yield delay(1000);
  yield put({
    type: Action.REQUEST_INCREMENT.SUCCESS,
    IncrementInfo: {
      value: 2
    } // TODO: 等待接口定义
  });
}

function* watchIncrementInfo() {
  yield takeEvery(Action.LOAD_INCREMENT, loadIncrement);
}

export default function* rootSaga() {
  yield all([fork(watchIncrementInfo)]);
}
