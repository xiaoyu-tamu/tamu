import * as React from 'react';
import { Avatar } from '@material-ui/core';
import { StandardProps } from 'types';
import { decorate, Styles } from './UserPanel.styles';

export interface Props extends StandardProps {}

type P = Readonly<Props> & Styles;
type S = Readonly<typeof initialState>;

const initialState = {};

// --------------------------------------------------

class UserPanel extends React.Component<P, S> {
  readonly state: S = initialState;

  render() {
    const { className } = this.props;

    return <Avatar className={className}>M</Avatar>;
  }
}

export default decorate(UserPanel);
