import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core';

export const styles = ({  }: Theme) =>
  createStyles({
    root: {
      flex: 1,
      paddingTop: 48,
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    },
  });

export const decorate = withStyles(styles);
export type Styles = WithStyles<typeof styles>;
