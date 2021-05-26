import React from "react";
// eslint-disable-next-line
import invariant from "tiny-invariant";

import RouterContext from "./RouterContext.js";
import HistoryContext from "./HistoryContext.js";
import matchPath from "./matchPath.js";

const useContext = React.useContext;

export function useHistory() {


  return useContext(HistoryContext);
}

export function useLocation() {


  return useContext(RouterContext).location;
}

export function useParams() {


  const match = useContext(RouterContext).match;
  return match ? match.params : {};
}

export function useRouteMatch(path) {


  const location = useLocation();
  const match = useContext(RouterContext).match;
  return path ? matchPath(location.pathname, path) : match;
}
