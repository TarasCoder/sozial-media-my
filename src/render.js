import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addPost, changeText } from "./redux/state";

export function reRenderAll(state) {
  ReactDOM.render(
    <App state={state} addPost={addPost} changeText={changeText} />,
    document.getElementById("root")
  );
}
