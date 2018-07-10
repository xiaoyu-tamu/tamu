import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core';

export const styles = ({ breakpoints, mixins }: Theme) =>
  createStyles({
    root: mixins.gutters({
      padding: '48px 0',
      flex: 1,
      width: '100%',
    }),

    card: {
      margin: '0 auto',
      maxWidth: 936,
      [breakpoints.down('sm')]: {
        textAlign: 'center',
      },
    },

    main: {
      maxWidth: 576,
      margin: '52px auto',
      paddingLeft: 184,
      position: 'relative',

      [breakpoints.down('sm')]: {
        maxWidth: 320,
        paddingTop: 96,
        paddingLeft: 0,
      },
    },

    extra: {
      marginTop: 24,
    },

    description: {
      [breakpoints.down('sm')]: {
        marginTop: 36,
      },
    },
    image: {
      position: 'absolute',
      width: 144,
      height: 144,
      top: 0,
      left: -10,

      [breakpoints.down('sm')]: {
        left: '50%',
        transformOrigin: 'top center',
        transform: 'translate(-50%,0) scale(0.66667)',
      },

      '& > img': {
        width: 192,
        height: 192,
        position: 'absolute',
        left: -24,
        top: -24,
      },
    },
  });

export const decorate = withStyles(styles);
export type Classes = WithStyles<typeof styles>;
