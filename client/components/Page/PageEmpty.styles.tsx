import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core';

export const styles = ({ mixins }: Theme) =>
  createStyles({
    root: mixins.gutters({
      padding: '48px 0',
      flex: 1,
      width: '100%',
    }),

    card: {
      borderRadius: 8,
      margin: '0 auto',
      maxWidth: 936,
    },
    main: {
      maxWidth: 576,
      margin: '52px auto',
      paddingLeft: 184,
      position: 'relative',
    },

    extra: {
      marginTop: 24,
    },

    image: {
      position: 'absolute',
      width: 144,
      height: 144,
      top: 0,
      left: -10,

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
export type Styles = WithStyles<typeof styles>;
