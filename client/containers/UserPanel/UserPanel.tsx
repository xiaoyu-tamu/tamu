import React from 'react';

import { Avatar } from '@material-ui/core';
import { StandardProps } from 'types';

export interface Props extends StandardProps {
  firstLetter?: string;
}

type P = Readonly<Props>;
type S = Readonly<typeof initialState>;

const initialState = {};

// --------------------------------------------------

class UserPanel extends React.Component<P> {
  readonly state: S = initialState;

  render() {
    const { className, firstLetter } = this.props;

    return <Avatar className={className}>{firstLetter || 'M'}</Avatar>;
  }
}

export default UserPanel;
