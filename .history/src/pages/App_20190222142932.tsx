import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from "react-redux";
import createStore from "../store";
const store = createStore({});

import "./app.scss";

import Counter from "../component/Counter";

const action = (type: string, payload: any = {}) =>
  store.dispatch({ type, ...payload });

class Index extends React.PureComponent<{}, {}> {
  constructor(props: any) {
    super(props);
  }

  public increment() {
    action("REQUEST_INCREMENT");
  }

  public decrement() {action("REQUEST_DECREMENT")}

  public incrementAsync() {}
  public render() {
    return (
      <Counter
        value={store.getState()}
        onIncrement={this.increment.bind(this)}
        onDecrement={() => }
        onIncrementAsync={() => action("REQUEST_INCREMENT_ASYNC")}
      />
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById("app") as HTMLElement
);

if (module.hot) {
  module.hot.accept();
}
