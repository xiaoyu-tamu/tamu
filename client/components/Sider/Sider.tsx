import * as React from 'react';
import {
  SwipeableDrawer,
  Drawer,
  Hidden,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Icon,
} from '@material-ui/core';

import { StandardProps } from 'types';
import { decorate, Classes } from './Sider.styles';
import { isIOS } from '../../services/utils/helper';

export interface Props extends StandardProps {
  isOpen: boolean;
  onToggle: () => void;
}

type P = Readonly<Props> & Classes;
type S = Readonly<typeof initialState>;

const initialState = {};

// --------------------------------------------------

class Sider extends React.Component<P, S> {
  readonly state: S = initialState;

  render() {
    const { classes, isOpen, onToggle } = this.props;

    const content = (
      <>
        <Toolbar className={classes.toolbar}>
          <img src="static/images/logo.png" className={classes.logo} />
          <Typography variant="title" className={classes.brand}>
            Aggies Portal
          </Typography>
        </Toolbar>
        <div className={classes.dashboard}>
          <Button size="large" fullWidth disableRipple>
            <Icon className={classes.leftIcon}>dashboard</Icon>
            Dashboard
          </Button>
          <IconButton>
            <Icon>settings</Icon>
          </IconButton>
        </div>
      </>
    );
    return (
      <aside className={classes.root}>
        <Hidden mdUp>
          <SwipeableDrawer
            disableBackdropTransition={!isIOS}
            variant="temporary"
            open={isOpen}
            onOpen={onToggle}
            onClose={onToggle}
            classes={{ paper: classes.paper }}
            ModalProps={{ keepMounted: true }}
          >
            {content}
          </SwipeableDrawer>
        </Hidden>
        <Hidden mdDown implementation="css">
          <Drawer variant="permanent" open classes={{ paper: classes.permanentPaper }}>
            {content}
          </Drawer>
        </Hidden>
      </aside>
    );
  }
}

export default decorate(Sider);
