import React, { PureComponent } from 'react';
import autobind from 'autobind-decorator';
import {} from '@material-ui/core';
import { find } from 'lodash';
import { StandardProps } from 'types';
import { withRouter, WithRouterProps, RouterProps } from 'next/router';

import { routeToTitle } from 'services/utils/helper';
import { Route, routes } from 'services/routes';
import { CardError, CardErrorProps } from 'components/Cards';
import { PageHeading, Page, PageBanner } from 'components/Page';
import { getProps } from 'services/utils';

export interface Props extends StandardProps<DP> {
  metadata: Metadata;
}

type S = Readonly<typeof initialState>;
type P = Readonly<Props> & WithRouterProps;
type DP = typeof defaultProps;

export type Metadata = {
  isEmpty: boolean;
  isError: boolean;
  onEmpty: CardErrorProps;
  onError: CardErrorProps;
  bannerTitle?: string;
  bannerDescription?: string;
};

// --------------------------------------------------

const initialState = {
  isSiderOpen: false,
};

const defaultProps = {
  fluid: false,
};

export const RootContext = React.createContext({});

class Root extends PureComponent<P, S> {
  readonly state: S = {
    ...initialState,
  };

  @autobind
  toggleSider() {
    this.setState((prevState) => ({ isSiderOpen: !prevState.isSiderOpen }));
  }

  render() {
    const { className, children, metadata, router, fluid } = getProps(this.props, defaultProps);
    const { isSiderOpen } = this.state;

    const { isEmpty, isError, onEmpty, onError } = metadata;
    const activeRoute = findActiveRoute(routes, router);
    const title = activeRoute ? routeToTitle(activeRoute) : 'Homepage';

    return (
      <RootContext.Provider value={{ fluid }}>
        <Page
          className={className}
          isSiderOpen={isSiderOpen}
          toggleSider={this.toggleSider}
          activeRoute={activeRoute}
          routes={routes}
        >
          {this.renderHeader(title)}
          {isEmpty ? <CardError {...onEmpty} /> : isError ? <CardError {...onError} /> : children}
        </Page>
      </RootContext.Provider>
    );
  }
  private renderHeader(pageTitle: string) {
    const { bannerTitle, bannerDescription } = this.props.metadata;

    if (bannerTitle && bannerDescription) {
      return <PageBanner title={bannerTitle} description={bannerDescription} />;
    } else {
      return <PageHeading title={pageTitle} />;
    }
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
