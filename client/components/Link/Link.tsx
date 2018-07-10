import React from 'react';
import { withRouter, WithRouterProps } from 'next/router';
import NextLink, { LinkState } from 'next/link';
import classnames from 'classnames';
import { StandardProps, BaseVariant } from 'types';
import { decorate, Classes } from './Link.styles';
import { getProps } from '../../services/utils/react';
import { Omit } from '@material-ui/core';

export interface Props extends StandardProps<DP>, Omit<LinkState, 'children'> {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

type P = Props & Classes & WithRouterProps;
type DP = Readonly<typeof defaultProps>;
type Variant = BaseVariant | 'button';

const defaultProps = {
  variant: 'default' as Variant,
  activeClassName: 'active',
};

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

export default decorate(withRouter(Link));
