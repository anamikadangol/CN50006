/* eslint-disable react/jsx-pascal-case */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Hook_ControlledButtonState from "./Counter"; 
import EmojeeCounter from "./EmojeeCounters"; 
import TextboxLabel from "./TextBoxLabel.js"; 

ReactDOM.render(
  <React.StrictMode>
    {/* Task 1 */}
    <Hook_ControlledButtonState />

    {/* Task 2 */}
    <EmojeeCounter pic="Love.png" />
    <EmojeeCounter pic="sad.png" />
    <EmojeeCounter pic="like.png" />

    {/* Task 3 */}
    <TextboxLabel />
  </React.StrictMode>,
  document.getElementById("root")
);