import * as React from 'react';
import {} from '@material-ui/core';
import { StandardProps } from 'types';
import { decorate, Classes } from './Page.styles';
import { Layout } from '../../containers/Layout';

export interface Props {}

type P = Readonly<Props> & Classes;
type S = Readonly<typeof initialState>;

const initialState = {};

// --------------------------------------------------

class Page extends React.Component<P, S> {
  readonly state: S = initialState;

  render() {
    const { classes, children } = this.props;

    return (
      <Layout>
        <main className={classes.root}>{children ? children : <div>123</div>}</main>
      </Layout>
    );
  }
}

export default decorate(Page);
