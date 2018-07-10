import * as React from 'react';
import { List } from '@material-ui/core';
import { StandardProps } from 'types';
import { decorate, Classes } from './Navigation.styles';
import { Page } from '../../services/pages';
import NavigationItem from './NavigationItem';
import { pageToTitle } from '../../services/utils/helper';

export interface Props extends StandardProps {
  pages: Page[];
  activePage: Page;
}

type P = Readonly<Props> & Classes;

// --------------------------------------------------

const Navigation: React.SFC<P> = ({ className, classes, pages, activePage, ...rest }) => (
  <div className={classes.root}>{renderNavItems({ pages, activePage, depth: 0, props: rest })}</div>
);
function renderNavItems({
  pages,
  ...rest
}: {
  pages: Page[];
  depth: number;
  activePage: Page;
  props: any;
}) {
  return (
    <List>
      {pages.reduce(
        (routes, page) => reduceChildRoutes({ routes, page, ...rest }),
        [] as React.ReactNodeArray
      )}
    </List>
  );
}

function reduceChildRoutes({
  props,
  page,
  activePage,
  routes,
  depth,
}: {
  routes: React.ReactNodeArray;
  page: Page;
  depth: number;
  props: any;
  activePage: Page;
}) {
  const title = pageToTitle(page);

  if (page.children && page.children.length) {
    const forceOpen = activePage.pathname.indexOf(page.pathname) === 0;
    routes.push(
      <NavigationItem
        details={page.children.map(pageToTitle).join(', ')}
        depth={depth}
        key={title}
        forceOpen={forceOpen}
        title={title}
      >
        {renderNavItems({ props, pages: page.children, activePage, depth: depth + 1 })}
      </NavigationItem>
    );
  } else {
    routes.push(
      <NavigationItem
        depth={depth}
        key={title}
        title={title}
        href={page.pathname}
        onClick={props.onClose}
      />
    );
  }

  return routes;
}

export default decorate(Navigation);
