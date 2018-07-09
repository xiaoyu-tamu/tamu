import * as React from 'react';
import { AppBar, Toolbar, IconButton, Icon } from '@material-ui/core';
import { decorate, Classes } from './Header.styles';
import UserPanel from '../../containers/UserPanel/UserPanel';

export interface Props {
  toggleDrawer: () => void;
}

type P = Readonly<Props> & Classes;
type S = Readonly<typeof initialState>;

const initialState = {};

// --------------------------------------------------

class Header extends React.Component<P, S> {
  readonly state: S = initialState;

  render() {
    const { classes, children, toggleDrawer } = this.props;

    return (
      <AppBar className={classes.root}>
        <Toolbar>
          <IconButton onClick={toggleDrawer} color="inherit" className={classes.toggler}>
            <Icon>menu</Icon>
          </IconButton>
          <UserPanel className={classes.avatar} />
        </Toolbar>
      </AppBar>
    );
  }
}

export default decorate(Header);
