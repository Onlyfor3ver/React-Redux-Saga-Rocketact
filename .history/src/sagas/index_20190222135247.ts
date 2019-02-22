import {
  all,
  fork,
  put,
  take,
  takeEvery,
  select,
  call,
  delay
} from "redux-saga";

import * as Action from "../actions";

function* loadSagaInfo() {
  yield delay(1000);
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

export default function* rootSaga() {
  yield all([fork(watchSagaInfo)]);
}
