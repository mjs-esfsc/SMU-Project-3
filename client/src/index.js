// MB: ADDED SERVICEWORKER
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import 'bootstrap/dist/css/bootstrap.min.css';
// MB: There is an index.css file. Are we using it? It was not being called. I added an import line and commented it out.
// import './index.css';
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();
