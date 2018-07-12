import React from 'react';
import { SwipeableDrawer, Drawer, Hidden } from '@material-ui/core';
import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core';

import { StandardProps } from 'types';
import { isIOS } from 'services/utils';

export interface Props extends StandardProps {
  open: boolean;
  onToggle: () => void;
}

type P = Readonly<Props> & WithStyles<typeof styles>;

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

// --------------------------------------------------

const styles = ({ spacing, palette }: Theme) =>
  createStyles({
    paper: {
      width: spacing.sider,
      borderRight: 0,
    },

    permanentPaper: {
      width: spacing.sider,
      borderRight: 0,
      height: '100%',
    },

    dashboard: {
      display: 'flex',
      boxShadow: `inset 0 -1px 0 ${palette.divider}`,
    },

    leftIcon: {
      marginRight: 16,
    },
  });

export default withStyles(styles)(Sider);
