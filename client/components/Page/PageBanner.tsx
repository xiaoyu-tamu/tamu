import * as React from 'react';
import classnames from 'classnames';
import { Typography, Chip } from '@material-ui/core';
import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core';
import { StandardProps } from 'types';
import { getProps } from 'services/utils';
import { Box } from 'components/Box';

export interface Props extends StandardProps<DP> {
  title: string;
  description: string;
}

type P = Readonly<Props> & WithStyles<typeof styles>;
type DP = typeof defaultProps;

// --------------------------------------------------

const defaultProps = {
  fluid: false,
};

const PageHero: React.SFC<P> = (props) => {
  const { className, classes, title, description, fluid } = getProps(props, defaultProps);
  const classNames = classnames(className, classes.root);
  return (
    <div className={classNames}>
      <Box fluid={fluid} className={classes.box}>
        <main className={classes.main}>
          <Chip label="Beta" className={classes.chip} />
          <Typography color="inherit" variant="display1" gutterBottom>
            {title}
          </Typography>
          <Typography color="inherit" variant="subheading" gutterBottom>
            {description}
          </Typography>
        </main>
      </Box>
    </div>
  );
};

// --------------------------------------------------

const styles = ({ spacing, palette }: Theme) =>
  createStyles({
    root: {
      backgroundColor: palette.primary.main,
      minHeight: 456,
      height: '100%',
      color: '#fff',
    },

    box: {
      display: 'flex',
      alignItems: 'center',
    },

    main: {
      width: 400,
    },

    chip: {
      marginBottom: spacing.unit * 2,
    },
  });
export default withStyles(styles)(PageHero);
