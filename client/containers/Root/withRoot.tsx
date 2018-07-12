import React, { ComponentType } from 'react';
import HoistNonReactStatics from 'hoist-non-react-statics';
import { Overwrite } from '@material-ui/core';
import { RootContext } from './Root';

export type WithRoot = { root: { fluid: boolean } };

export default function withRoot<P extends WithRoot & React.ClassAttributes<{}>>(
  Component: ComponentType<P>
): ComponentType<Overwrite<P, Partial<WithRoot>>> {
  const Wrapper = React.forwardRef<any, any>((props, ref) => (
    <RootContext.Consumer>
      {(root) => <Component ref={ref} root={root} {...props} />}
    </RootContext.Consumer>
  ));
  Wrapper.displayName = `WithRoot(${Component.displayName || Component.name})`;
  return HoistNonReactStatics(Wrapper, Component);
}
