import React from 'react';
import classnames from 'classnames';
import { Toolbar, Typography } from '@material-ui/core';
import { StandardProps } from 'types';
import { getProps } from 'services/utils/react';
import { Link } from 'components/Link';
import { decorate, Classes } from './Brand.style';

export interface Props extends StandardProps<DP> {}

type P = Readonly<Props> & Classes;
type DP = typeof defaultProps;
// --------------------------------------------------

const defaultProps = {
  title: 'Aggies Portal',
  image: {
    src: 'static/images/logo.png',
    alt: 'Aggies Portal Logo',
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

export default decorate(Brand);
