import * as  React from "react";
import * as  ReactDOM from "react-dom";
declare var module;
import B from './app/components/b'
const title =
  "3432432";

ReactDOM.render(<div>
  <B/>
  {title}</div>, document.getElementById("app"));
module.hot.accept();
