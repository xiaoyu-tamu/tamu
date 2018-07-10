import * as React from 'react';

import { Avatar } from '@material-ui/core';
import { StandardProps } from 'types';
import { decorate, Classes } from './UserPanel.styles';

export interface Props extends StandardProps {
  firstLetter: string;
}

type P = Readonly<Props> & Classes;
type S = Readonly<typeof initialState>;

const initialState = {};

// --------------------------------------------------

class UserPanel extends React.Component<P> {
  readonly state: S = initialState;

  render() {
    const { className, firstLetter } = this.props;

    return <Avatar className={className}>{firstLetter}</Avatar>;
  }
}

export default decorate(UserPanel);
