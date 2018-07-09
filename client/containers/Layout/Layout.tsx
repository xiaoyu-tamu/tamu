import * as React from 'react';
import {} from '@material-ui/core';
import { StandardProps } from 'types';

import autobind from 'autobind-decorator';
import { Header } from '../../components/Header';
import { Sider } from '../../components/Sider';
export interface Props extends StandardProps {}

type P = Readonly<Props>;
type S = Readonly<typeof initialState>;

const initialState = {
  isDrawerOpen: false,
};

// --------------------------------------------------

class Layout extends React.Component<P, S> {
  readonly state: S = initialState;

  @autobind
  onDrawerToggle() {
    this.setState((prevState) => ({ isDrawerOpen: !prevState.isDrawerOpen }));
  }

  render() {
    const { children } = this.props;
    const { isDrawerOpen } = this.state;
    return (
      <div style={{ display: 'flex' }}>
        <Header toggleDrawer={this.onDrawerToggle} />
        <Sider isOpen={isDrawerOpen} onToggle={this.onDrawerToggle} />
        {children}
      </div>
    );
  }
}

export default Layout;
