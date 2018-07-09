import * as React from 'react';
import {} from '@material-ui/core';
import { StandardProps } from 'types';
import { decorate, Styles } from './Page.styles';

export interface Props {}

type P = Readonly<Props> & Styles;
type S = Readonly<typeof initialState>;

const initialState = {};

// --------------------------------------------------

class Page extends React.Component<P, S> {
  readonly state: S = initialState;

  render() {
    const { classes, children } = this.props;

    return <main className={classes.root}>{children ? children : <div>123</div>}</main>;
  }
}

export default decorate(Page);
