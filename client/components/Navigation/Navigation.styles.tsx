import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core';

export const styles = ({  }: Theme) =>
  createStyles({
    root: {},
  });

export const decorate = withStyles(styles);
export type Classes = WithStyles<typeof styles>;
