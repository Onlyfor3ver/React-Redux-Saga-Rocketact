import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from "react-redux";
import createStore from "../store";
const store = createStore({});

import "./app.scss";

class Hello extends React.PureComponent<{}, {}> {
  constructor(props: any) {
    super(props);
  }
  public render() {
    return <div>Hello React-Reudx-Saga-Rocketact</div>;
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Counter
      value={store.getState()}
      onIncrement={() => action("INCREMENT")}
      onDecrement={() => action("DECREMENT")}
      onIncrementAsync={() => action("INCREMENT_ASYNC")}
    />
    , document.getElementById('root')
  </Provider>,
  document.getElementById("app") as HTMLElement
);

if (module.hot) {
  module.hot.accept();
}
