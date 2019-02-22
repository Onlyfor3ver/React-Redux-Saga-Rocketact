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
    type: Action.REQUEST_CARTINFO.SUCCESS,
    cartInfo: {} // TODO: 等待接口定义
  });
}

function* watchCartInfo() {
  yield takeEvery(Action.LOAD_CARTINFO, loadCartInfo);
}

export default function* rootSaga() {
  yield all([fork(watchCartInfo)]);
}
