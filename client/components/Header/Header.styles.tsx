import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core';

const styles = ({ spacing, breakpoints, transitions }: Theme) =>
  createStyles({
    root: {
      boxShadow: `none`,
      transition: transitions.create('width'),

      [breakpoints.up('md')]: {
        width: `calc(100% - ${spacing.sider}px)`,
      },
      '@media print': {
        position: 'absolute',
      },
    },
    toggler: {
      [breakpoints.up('md')]: {
        display: 'none',
      },
      marginLeft: spacing.negativeIconButton,
    },

    avatar: {
      marginLeft: 'auto',
      height: 36,
      width: 36,
      marginRight: -4,
    },
  });

export const decorate = withStyles(styles);
export type Classes = WithStyles<typeof styles>;
