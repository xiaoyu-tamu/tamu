import React from 'react';
import classnames from 'classnames';
import { Toolbar, Typography } from '@material-ui/core';
import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import { StandardProps } from 'types';
import { getProps } from 'services/utils/react';
import { Link } from 'components/Link';
import { getImage, ImageType } from 'services/utils';

export interface Props extends StandardProps<DP> {}

type P = Readonly<Props> & WithStyles<typeof styles>;
type DP = typeof defaultProps;

// --------------------------------------------------

const defaultProps = {
  title: 'Aggies Portal',
  image: {
    ...getImage(ImageType.Logo),
  },
};

const Brand: React.SFC<P> = (props) => {
  const { classes, className, title, image } = getProps(props, defaultProps);
  const classNames = classnames(classes.root, className);
  return (
    <Toolbar className={classNames}>
      <Link href="/">
        <img className={classes.logo} {...image} />
      </Link>
      <Typography variant="title" className={classes.title}>
        {title}
      </Typography>
    </Toolbar>
  );
};

// --------------------------------------------------

const styles = ({ palette }: Theme) =>
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

export default withStyles(styles)(Brand);
