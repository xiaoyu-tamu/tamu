import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { StandardProps } from 'types';
import { decorate, Classes } from './Page.styles';
import { SiderToggler } from '../Togglers';
import { Brand } from '../Brand';
import { ResponsiveDrawer } from '../ResponsiveDrawer';
import { Navigation } from '../Navigation';
import { Route } from '../../services/routes';
import UserPanel from '../../containers/UserPanel/UserPanel';

export interface Props extends StandardProps {
  isSiderOpen: boolean;
  toggleSider: () => void;
  routes: Route[];
  activeRoute?: Route;
}

type P = Readonly<Props> & Classes;

// --------------------------------------------------

const Page: React.SFC<P> = ({
  classes,
  toggleSider,
  isSiderOpen,
  children,
  routes,
  activeRoute,
}) => (
  <>
    <AppBar className={classes.header}>
      <Toolbar>
        <SiderToggler className={classes.siderToggler} onClick={toggleSider} />
        <UserPanel className={classes.userPanel} />
      </Toolbar>
    </AppBar>

    <aside className={classes.sider}>
      <ResponsiveDrawer open={isSiderOpen} onToggle={toggleSider}>
        <Brand />
        <Navigation routes={routes} activeRoute={activeRoute} />
      </ResponsiveDrawer>
    </aside>

    <main className={classes.main}>
      {/* Main Content */}
      {children}
    </main>
  </>
);

export default decorate(Page);
