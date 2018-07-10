import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core';

export const styles = ({ palette }: Theme) =>
  createStyles({
    root: {
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    default: {
      color: 'inherit',
    },
    primary: {
      color: palette.primary.main,
    },
    secondary: {
      color: palette.secondary.main,
    },
    button: {
      '&:hover': {
        textDecoration: 'inherit',
      },
    },
  });

export const decorate = withStyles(styles);
export type Classes = WithStyles<typeof styles>;
