import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core';

export const styles = ({ typography, palette }: Theme) =>
  createStyles({
    root: {},
    active: {
      color: palette.primary.main,
      fontWeight: typography.fontWeightMedium,
    },

    item: {
      display: 'block',
      paddingTop: 0,
      paddingBottom: 0,
    },

    itemChild: {
      display: 'flex',
      paddingTop: 0,
      paddingBottom: 0,
    },

    button: {
      justifyContent: 'flex-start',
      textTransform: 'none',
      width: '100%',
      padding: '16px 0',
      fontWeight: typography.fontWeightRegular,
    },

    buttonLabel: {
      flexDirection: 'column',
      alignItems: 'start',
    },

    title: {
      fontWeight: typography.fontWeightMedium,
    },
    details: {
      paddingTop: 8,
      ...typography.caption,
    },
    buttonChild: {
      justifyContent: 'flex-start',
      textTransform: 'none',
      width: '100%',
      fontWeight: typography.fontWeightRegular,
      '&.depth-0': {
        fontWeight: typography.fontWeightMedium,
      },
    },
  });

export const decorate = withStyles(styles);
export type Classes = WithStyles<typeof styles>;
