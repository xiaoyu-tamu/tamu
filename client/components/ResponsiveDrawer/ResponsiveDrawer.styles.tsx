import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core';

export const styles = ({ spacing, palette }: Theme) =>
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

export const decorate = withStyles(styles);
export type Classes = WithStyles<typeof styles>;
