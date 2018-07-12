import React from 'react';
import classnames from 'classnames';
import { StandardProps } from 'types';
import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core/styles';

export interface Props extends StandardProps<DP> {}

type P = Readonly<Props> & WithStyles<typeof styles>;
type DP = typeof defaultProps;

// --------------------------------------------------

const defaultProps = { fluid: false };

const Box: React.SFC<P> = ({ classes, className, children, fluid }) => {
  const classNames = classnames(classes.root, className, { [classes.maxWidth]: !fluid });
  return <div className={classNames}>{children}</div>;
};

// --------------------------------------------------

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {
      height: '100%',
      background: 'inherit',
    },

    maxWidth: {
      maxWidth: spacing.page,
      margin: '0 auto',
    },
  });

export default withStyles(styles)(Box);
