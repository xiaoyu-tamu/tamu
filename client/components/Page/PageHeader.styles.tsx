import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core';

export const styles = ({ palette, spacing }: Theme) =>
  createStyles({
    root: {
      background: palette.primary.main,
      color: '#fff',
      flex: '0 0 56px',
      justifyContent: 'space-between',
    },

    main: {},

    actions: {
      marginRight: spacing.negativeIconButton,
    },
  });

export const decorate = withStyles(styles);
export type Styles = WithStyles<typeof styles>;
