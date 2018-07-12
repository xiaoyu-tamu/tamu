import React, { SyntheticEvent } from 'react';
import autobind from 'autobind-decorator';
import { Avatar } from '@material-ui/core';
import { StandardProps } from 'types';
import { UserSettings } from 'components/UserSettings';
import { Popover } from 'components/Popover';

export interface Props extends StandardProps {}

type P = Readonly<Props>;
type S = Readonly<typeof initialState>;

const initialState = {
  anchorEl: undefined as HTMLElement | undefined,
};

// --------------------------------------------------

class UserPanel extends React.Component<P> {
  readonly state: S = initialState;

  @autobind
  handleOpen(e: SyntheticEvent<HTMLElement>) {
    this.setState({ anchorEl: e.currentTarget });
  }

  @autobind
  handleClose() {
    this.setState({ anchorEl: undefined });
  }

  render() {
    const { className } = this.props;
    const { anchorEl } = this.state;

    return (
      <div className={className}>
        <Avatar className={className} onClick={this.handleOpen} style={{ cursor: 'pointer' }}>
          M
        </Avatar>
        <Popover
          width={250}
          anchor="right"
          anchorEl={anchorEl}
          onClose={this.handleClose}
          open={Boolean(anchorEl)}
        >
          <UserSettings />
        </Popover>
      </div>
    );
    return;
  }
}

export default UserPanel;
