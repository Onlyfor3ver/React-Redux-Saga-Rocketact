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
    return action("LOAD_INCREMENT", value);
  }

  public decrement() {
    return action("LOAD_DECREMENT", value);
  }

  public incrementAsync(value: number) {
    return action("LOAD_INCREMENT_ASYNC", value);
  }
  public render() {
    const { IncrementInfo } = store.getState();
    return (
      <Counter
        value={IncrementInfo.value}
        onIncrement={this.increment.bind(this, IncrementInfo.value)}
        onDecrement={this.decrement.bind(this, IncrementInfo.value)}
        onIncrementAsync={this.incrementAsync.bind(this, IncrementInfo.value)}
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
