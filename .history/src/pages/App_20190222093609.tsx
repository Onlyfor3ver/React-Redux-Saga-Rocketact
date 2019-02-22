import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from "react-redux";
import createStore from "../store";

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
    <Index />
  </Provider>,
  document.getElementById("app") as HTMLElement
);

if (module.hot) {
  module.hot.accept();
}
