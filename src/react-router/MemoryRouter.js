import React from "react";
// eslint-disable-next-line
import PropTypes from "prop-types";
import { createMemoryHistory as createHistory } from "history";
// eslint-disable-next-line
import warning from "tiny-warning";

import Router from "./Router.js";

/**
 * The public API for a <Router> that stores location in memory.
 */
class MemoryRouter extends React.Component {
  history = createHistory(this.props);

  render() {
    return <Router history={this.history} children={this.props.children} />;
  }
}


export default MemoryRouter;
