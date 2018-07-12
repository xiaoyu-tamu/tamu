import React from 'react';
import { List } from '@material-ui/core';
import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core';

import { StandardProps } from 'types';
import { Route } from 'services/routes';
import { routeToTitle } from 'services/utils/helper';
import NavigationItem from './NavigationItem';

export interface Props extends StandardProps {
  routes: Route[];
  activeRoute?: Route;
}

type P = Readonly<Props> & WithStyles<typeof styles>;

// --------------------------------------------------

const Navigation: React.SFC<P> = ({ className, classes, routes, activeRoute, ...rest }) => (
  <div className={classes.root}>
    {renderNavItems({ routes, activeRoute, depth: 0, props: rest })}
  </div>
);
function renderNavItems({
  routes,
  ...rest
}: {
  routes: Route[];
  depth: number;
  activeRoute?: Route;
  props: any;
}) {
  return (
    <List>
      {routes.reduce(
        (routes, Route) => reduceChildRoutes({ routes, Route, ...rest }),
        [] as React.ReactNodeArray
      )}
    </List>
  );
}

function reduceChildRoutes({
  props,
  Route,
  activeRoute,
  routes,
  depth,
}: {
  routes: React.ReactNodeArray;
  Route: Route;
  depth: number;
  props: any;
  activeRoute?: Route;
}) {
  const title = routeToTitle(Route);

  if (Route.children && Route.children.length) {
    const forceOpen = activeRoute && activeRoute.pathname.indexOf(Route.pathname) === 0;
    routes.push(
      <NavigationItem
        details={Route.children.map(routeToTitle).join(', ')}
        depth={depth}
        key={title}
        forceOpen={forceOpen}
        title={title}
      >
        {renderNavItems({ props, routes: Route.children, activeRoute, depth: depth + 1 })}
      </NavigationItem>
    );
  } else {
    routes.push(
      <NavigationItem
        depth={depth}
        key={title}
        title={title}
        href={Route.pathname}
        onClick={props.onClose}
      />
    );
  }

  return routes;
}

// --------------------------------------------------

const styles = ({  }: Theme) =>
  createStyles({
    root: {
      overflowY: 'auto',
    },
  });
export default withStyles(styles)(Navigation);
