import * as React from 'react';
import { IconButton, Icon, Typography, Toolbar } from '@material-ui/core';
import * as classnames from 'classnames';
import { StandardProps } from 'types';
import { decorate, Styles } from './PageHeader.styles';

export interface Props extends StandardProps {
  title: string;
  actions?: React.ReactElement<any>;
}

type P = Readonly<Props> & Styles;

// --------------------------------------------------

export const PageHeader: React.SFC<P> = ({ classes, className, title, children, actions }) => {
  const root = classnames(classes.root, className);

  return (
    <Toolbar className={root}>
      <div className={classes.main}>
        <Typography color="inherit" variant="title">
          {title}
        </Typography>
        {children}
      </div>

      <div className={classes.actions}>
        {actions}
        <IconButton color="inherit">
          <Icon>help</Icon>
        </IconButton>
      </div>
    </Toolbar>
  );
};

export default decorate(PageHeader);