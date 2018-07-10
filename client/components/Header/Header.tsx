import * as React from 'react';
import { AppBar, Toolbar, IconButton, Icon } from '@material-ui/core';
import { decorate, Classes } from './Header.styles';
import UserPanel from '../../containers/UserPanel/UserPanel';

export interface Props {
  toggleDrawer: () => void;
}

type P = Readonly<Props> & Classes;

// --------------------------------------------------

const Header: React.SFC<P> = ({ classes, toggleDrawer }) => (
  <AppBar className={classes.root}>
    <Toolbar>
      <IconButton onClick={toggleDrawer} color="inherit" className={classes.toggler}>
        <Icon>menu</Icon>
      </IconButton>
      <UserPanel firstLetter="M" className={classes.avatar} />
    </Toolbar>
  </AppBar>
);

export default decorate(Header);
