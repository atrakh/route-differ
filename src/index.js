import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./containers/AppContainer";
import "normalize.css";
import "@blueprintjs/core/dist/blueprint.css";

const store = createStore(
  () => {},
  null,
  window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
