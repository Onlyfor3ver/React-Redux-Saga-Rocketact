import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import rootSaga from "../sagas";

import rootReducer from "../reducers";

interface IIncrementInfo {
  value: Number;
}

export interface IRootStore {
  IncrementInfo?: IIncrementInfo;
}

export default () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);

  return store;
};
