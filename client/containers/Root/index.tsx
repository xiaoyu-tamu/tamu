import * as React from 'react';
import {} from '@material-ui/core';
import { find } from 'lodash';
import { StandardProps } from 'types';
import { withRouter, WithRouterProps, RouterProps } from 'next/router';
import autobind from 'autobind-decorator';

import { routeToTitle } from 'services/utils/helper';
import { Route, routes } from 'services/routes';
import { ErrorCard, ErrorCardProps } from 'components/Cards';
import { PageHeader, Page } from 'components/Page';

export interface Props extends StandardProps {
  metadata: Metadata;
}

type P = Readonly<Props> & WithRouterProps;
type S = Readonly<typeof initialState>;

const initialState = {
  isSiderOpen: false,
};

export type Metadata = {
  isEmpty: boolean;
  isError: boolean;
  onEmpty: ErrorCardProps;
  onError: ErrorCardProps;
};

// --------------------------------------------------

class Root extends React.Component<P, S> {
  readonly state: S = initialState;

  @autobind
  toggleSider() {
    this.setState((prevState) => ({ isSiderOpen: !prevState.isSiderOpen }));
  }

  render() {
    const { className, children, metadata, router } = this.props;
    const { isSiderOpen } = this.state;

    const { isEmpty, isError, onEmpty, onError } = metadata;

    const activeRoute = findActiveRoute(routes, router);

    const title = activeRoute ? routeToTitle(activeRoute) : 'Homepage';

    return (
      <Page
        className={className}
        isSiderOpen={isSiderOpen}
        toggleSider={this.toggleSider}
        activeRoute={activeRoute}
        routes={routes}
      >
        <PageHeader title={title} />

        {isEmpty ? <ErrorCard {...onEmpty} /> : isError ? <ErrorCard {...onError} /> : children}
      </Page>
    );
  }
}

function findActiveRoute(currentRoutes: Route[], router: RouterProps): Route | undefined {
  const activeRoute = find(
    currentRoutes,
    ({ pathname, children }) =>
      children ? router.pathname.indexOf(pathname) === 0 : router.pathname === pathname
  );

  if (!activeRoute) {
    return undefined;
  }

  // We need to drill down
  if (activeRoute.pathname !== router.pathname && activeRoute.children) {
    return findActiveRoute(activeRoute.children, router);
  }

  return activeRoute;
}

export default withRouter(Root);
