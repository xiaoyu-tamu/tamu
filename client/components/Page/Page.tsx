import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { StandardProps } from 'types';
import { Route } from 'services/routes';
import { SiderToggler } from 'components/Togglers';
import { ResponsiveDrawer } from 'components/ResponsiveDrawer';
import { Navigation } from 'components/Navigation';
import { Brand } from 'components/Brand';
import { UserPanel } from 'containers/UserPanel';
import { decorate, Classes } from './Page.style';
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
