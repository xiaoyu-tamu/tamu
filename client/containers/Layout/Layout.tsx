import * as React from 'react';
import {} from '@material-ui/core';
import { StandardProps } from 'types';

import autobind from 'autobind-decorator';
import { Header } from '../../components/Header';
import { Sider } from '../../components/Sider';
import { pages } from '../../services/pages';
import { Navigation } from '../../components/Navigation';
import { Classes, decorate } from './Layout.styles';
export interface Props extends StandardProps {}

type P = Readonly<Props> & Classes;
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

  findActivePage() {
    return pages[0];
  }
  render() {
    const { children, classes } = this.props;
    const { isDrawerOpen } = this.state;
    return (
      <div className={classes.root}>
        <Header toggleDrawer={this.onDrawerToggle} />
        <Sider isOpen={isDrawerOpen} onToggle={this.onDrawerToggle}>
          <Navigation pages={pages} activePage={this.findActivePage()} />
        </Sider>
        {children}
      </div>
    );
  }
}

export default decorate(Layout);
