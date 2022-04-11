import store from "./redux/state"
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

function reRenderAll(state) {
  ReactDOM.render(
    <App state={state} dispatch={store.dispatch.bind(store)} />,
    document.getElementById("root")
  );
}


reRenderAll(store.getState())
store.subscribe(reRenderAll)
