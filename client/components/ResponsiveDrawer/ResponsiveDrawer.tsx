import React from 'react';
import { SwipeableDrawer, Drawer, Hidden } from '@material-ui/core';
import { StandardProps } from 'types';
import { decorate, Classes } from './ResponsiveDrawer.styles';
import { isIOS } from '../../services/utils/helper';

export interface Props extends StandardProps {
  open: boolean;
  onToggle: () => void;
}

type P = Readonly<Props> & Classes;

// --------------------------------------------------

const Sider: React.SFC<P> = ({ classes, children, open, onToggle }) => (
  <>
    <Hidden mdUp>
      <SwipeableDrawer
        disableBackdropTransition={!isIOS}
        variant="temporary"
        open={open}
        onOpen={onToggle}
        onClose={onToggle}
        classes={{ paper: classes.paper }}
        ModalProps={{ keepMounted: true }}
      >
        {children}
      </SwipeableDrawer>
    </Hidden>
    <Hidden smDown implementation="css">
      <Drawer
        open
        PaperProps={{ elevation: 10 }}
        variant="permanent"
        classes={{ paper: classes.permanentPaper }}
      >
        {children}
      </Drawer>
    </Hidden>
  </>
);

export default decorate(Sider);
