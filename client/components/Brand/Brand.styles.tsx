import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core';

export const styles = ({ palette }: Theme) =>
  createStyles({
    root: {
      boxShadow: `inset 0 -1px 0 ${palette.divider}`,
    },
    logo: {
      maxHeight: 48,
    },

    title: {
      fontWeight: 400,
      marginLeft: 8,
    },
  });

export const decorate = withStyles(styles);
export type Classes = WithStyles<typeof styles>;
