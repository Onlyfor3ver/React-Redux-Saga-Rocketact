import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from "react-redux";
import createStore from "../store";
const store = createStore({});

import "./app.scss";

import Counter from "../component/Counter";

const action = (type: string, payload: any = {}) =>
  store.dispatch({ type, ...payload });

ReactDOM.render(
  <Provider store={store}>
    <Counter
      value={store.getState()}
      onIncrement={() => action("REQUEST_INCREMENT")}
      onDecrement={() => action("REQUEST_DECREMENT")}
      onIncrementAsync={() => action("REQUEST_INCREMENT_ASYNC")}
    />
    , document.getElementById('root')
  </Provider>,
  document.getElementById("app") as HTMLElement
);

if (module.hot) {
  module.hot.accept();
}
