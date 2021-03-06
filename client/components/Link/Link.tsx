import React from 'react';
import classnames from 'classnames';
import { Omit } from '@material-ui/core';
import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core/styles';

import { withRouter, WithRouterProps } from 'next/router';
import NextLink, { LinkState } from 'next/link';
import { StandardProps, BaseVariant } from 'types';
import { getProps } from 'services/utils/react';

export interface Props extends StandardProps<DP>, Omit<LinkState, 'children'> {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

type P = Props & WithStyles<typeof styles> & WithRouterProps;
type DP = Readonly<typeof defaultProps>;
type Variant = BaseVariant | 'button';

const defaultProps = {
  variant: 'default' as Variant,
  activeClassName: 'active',
};

// --------------------------------------------------

const Link: React.SFC<P> = (props) => {
  const {
    variant,
    classes,
    className,
    activeClassName,
    href,
    prefetch,
    router,
    ...rest
  } = getProps(props, defaultProps);

  const isActive = router.pathname === href && !!activeClassName;
  const classNames = classnames(classes.root, className, classes[variant]);
  const activeClassNames = classnames(className, classes.root, classes[variant], {
    [activeClassName]: isActive,
  });

  return href ? (
    <NextLink href={href} prefetch={prefetch} passHref>
      <a className={activeClassNames} {...rest} />
    </NextLink>
  ) : (
    <a className={classNames} {...rest} />
  );
};

// --------------------------------------------------

const styles = ({ palette }: Theme) =>
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

export default withStyles(styles)(withRouter(Link));
