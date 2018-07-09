import * as React from 'react';
import {} from '@material-ui/core';
import { StandardProps } from 'types';
import { decorate, Classes } from './Navigation.styles';

export interface Props extends StandardProps {}

type P = Readonly<Props> & Classes;
type S = Readonly<typeof initialState>;

const initialState = {};

// --------------------------------------------------

class Navigation extends React.Component<P, S> {
  readonly state: S = initialState;

  render() {
    const { className } = this.props;

    return <div>{}</div>;
  }
}

export default decorate(Navigation);
