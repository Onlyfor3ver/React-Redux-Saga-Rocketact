import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import rootSaga from "../sagas";

import rootReducer from "../reducers";

export interface IRootStore {
  cartInfo?: ICartInfoStore;
}

export default (initialState: IRootStore) => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);

  return store;
};
