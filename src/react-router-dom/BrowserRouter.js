import React from "react";
import { Router } from "react-router";
import { createBrowserHistory as createHistory } from "history";
// eslint-disable-next-line
import PropTypes from "prop-types";
// eslint-disable-next-line
import warning from "tiny-warning";

/**
 * The public API for a <Router> that uses HTML5 history.
 */
class BrowserRouter extends React.Component {
  history = createHistory(this.props);

  componentDidMount() {
    window.routerHistory = this.history;
  }

  render() {
    return <Router history={this.history} children={this.props.children} />;
  }
}

export default BrowserRouter;
