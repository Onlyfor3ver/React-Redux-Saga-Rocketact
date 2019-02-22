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
    type: Action.REQUEST_INCREMENT.SUCCESS,
    incrementInfo: {
      title: "Hello Saga"
    } // TODO: 等待接口定义
  });
}

function* watchSagaInfo() {
  yield takeEvery(Action.LOAD_INCREMENT, loadIncrement);
}

function* loadIsLogin() {
  yield put({ type: ActionTypes.REQUEST_LOGIN.PENDING });
  try {
    const loginResult = yield isLogin();
    yield put({
      type: ActionTypes.REQUEST_LOGIN.SUCCESS,
      isLogin: loginResult.islogin === "1"
    });
  } catch (error) {
    yield put({ type: ActionTypes.REQUEST_LOGIN.FAILURE });
  }
}

function* watchIsLogin() {
  yield takeEvery(ActionTypes.LOAD_LOGIN, loadIsLogin);
}

export default function* rootSaga() {
  yield all([fork(watchSagaInfo)]);
}
