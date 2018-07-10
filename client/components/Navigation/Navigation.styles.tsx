import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core';

export const styles = ({  }: Theme) =>
  createStyles({
    root: {
      overflowY: 'auto',
    },
  });

export const decorate = withStyles(styles);
export type Classes = WithStyles<typeof styles>;
