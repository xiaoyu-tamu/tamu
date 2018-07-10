import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core';

export const styles = ({ typography }: Theme) =>
  createStyles({
    root: {},

    tabRoot: {
      textTransform: 'capitalize',
      textAlign: 'left',
      minWidth: 'unset',
      fontWeight: typography.fontWeightRegular,
      marginRight: 16,
    },

    tabSelected: {
      fontWeight: typography.fontWeightMedium,
    },

    tabIndicator: {
      backgroundColor: '#fff',
      borderRadius: '3px 3px 0 0',
      backgroundClip: 'content-box',
      height: 3,
    },

    tabLabelContainer: {
      // make indicator wider then actual text
      paddingLeft: 4,
      paddingRight: 4,
    },
  });

export const decorate = withStyles(styles);
export type Classes = WithStyles<typeof styles>;
