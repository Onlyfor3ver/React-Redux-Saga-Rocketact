import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from "react-redux";
import createStore from "../store";

import "./app.scss";

class Index extends React.PureComponent<{}, {}> {
  constructor(props: any) {
    super(props);
  }
  public render() {
    return <div>Hello User Cart</div>;
  }
}

ReactDOM.render(
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Welcome to Rocketact</h1>
    </header>
  </div>,
  document.getElementById("app") as HTMLElement
);

if (module.hot) {
  module.hot.accept();
}
