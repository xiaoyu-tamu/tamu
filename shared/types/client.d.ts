declare module 'types' {
  import React from 'react';
  import { Omit } from '@material-ui/core';

  export type Margin = 'none' | 'dense' | 'normal';

  export type RenderFunction<T> = (args: ReturnType<T>) => React.ReactElement<any>;

  export type StandardProps<DP = {}> = Partial<DP> & {
    className?: string;
    style?: React.CSSProperties;
  };

  export type Mutable<T extends { [x: string]: any }, K extends string = keyof T> = {
    [P in K]: T[P]
  };

  export type BaseVariant = 'default' | 'primary' | 'secondary';
}
