import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core';

export const styles = ({  }: Theme) =>
  createStyles({
    root: {},
  });

export const decorate = withStyles(styles);
export type Styles = WithStyles<typeof styles>;
