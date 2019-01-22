import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/root-store";
import LoginContainer from './components/containers/login.jsx';
const hist = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={hist}>
          <Switch>
          <Route path="/" exact component={LoginContainer} />
           </Switch>
        </Router>
    </Provider>,
  document.getElementById("container")
);
