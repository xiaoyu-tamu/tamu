import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core';

export const styles = ({ breakpoints, spacing, palette }: Theme) =>
  createStyles({
    root: {
      [breakpoints.up('md')]: {
        flex: `0 0 ${spacing.sider}px`,
      },
    },

    paper: {
      width: spacing.sider,
      borderRight: 0,
    },

    permanentPaper: {
      width: spacing.sider,
      borderRight: 0,
      height: '100%',
    },
    toolbar: {
      boxShadow: `inset 0 -1px 0 ${palette.divider}`,
    },
    logo: {
      maxHeight: 48,
    },

    brand: {
      fontWeight: 400,
      marginLeft: 8,
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
