import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core';

export const styles = ({ palette, breakpoints, spacing, transitions }: Theme) =>
  createStyles({
    main: {
      flex: 1,
      paddingTop: 48,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'auto',
      height: '100%',
    },

    header: {
      boxShadow: `none`,
      transition: transitions.create('width'),

      [breakpoints.up('md')]: {
        width: `calc(100% - ${spacing.sider}px)`,
      },
      '@media print': {
        position: 'absolute',
      },
    },

    userPanel: {
      marginLeft: 'auto',
      height: 36,
      width: 36,
      marginRight: -4,
    },

    sider: {
      [breakpoints.up('md')]: {
        flex: `0 0 ${spacing.sider}px`,
      },
    },

    siderToggler: {
      [breakpoints.up('md')]: {
        display: 'none',
      },
      marginLeft: spacing.negativeIconButton,
    },

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
          display: 'flex',
        },
      },
    },
  });

export const decorate = withStyles(styles);
export type Classes = WithStyles<typeof styles>;
