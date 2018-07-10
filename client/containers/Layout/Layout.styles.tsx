import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core';

export const styles = ({ palette }: Theme) =>
  createStyles({
    '@global': {
      html: {
        WebkitFontSmoothing: 'antialiased', // Antialiasing.
        MozOsxFontSmoothing: 'grayscale', // Antialiasing.
        boxSizing: 'border-box',
        height: '100%',
        minHeight: '100%',
      },
      '*, *::before, *::after': {
        boxSizing: 'inherit',
      },
      body: {
        margin: 0,
        padding: 0,
        height: '100%',
        minHeight: '100%',
        overflow: 'hidden',
        backgroundColor: palette.background.default,
        '@media print': {
          backgroundColor: palette.common.white,
        },

        '& > div': {
          // style next.js root element
          height: '100%',
        },
      },
    },
    root: {
      height: '100%',
      display: 'flex',
    },
  });

export const decorate = withStyles(styles);
export type Classes = WithStyles<typeof styles>;
