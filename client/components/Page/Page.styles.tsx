import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core';

export const styles = ({  }: Theme) =>
  createStyles({
    root: {
      flex: 1,
      paddingTop: 48,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'auto',
      height: '100%',
    },
  });

export const decorate = withStyles(styles);
export type Classes = WithStyles<typeof styles>;
