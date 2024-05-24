import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

// import reportWebVitals from "./reportWebVitals";
// import i18n (needs to be bundled ;))
import "../i18n";
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
