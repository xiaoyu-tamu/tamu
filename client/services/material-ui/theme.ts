import { createMuiTheme } from '@material-ui/core';
import { Spacing } from '@material-ui/core/styles/spacing';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {}

  interface ThemeOptions {
    spacing?: Partial<Spacing>;
  }
}

declare module '@material-ui/core/styles/spacing' {
  export interface Spacing {
    negativeIconButton: number | string;
    sider: number;
    page: number;
  }
}

declare module '@material-ui/core/styles/' {
  export interface Spacing {
    negativeIconButton: number | string;
    sider: number;
    page: number;
  }
}

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#500000',
    },

    background: {
      default: '#edeff1',
    },
  },
  spacing: {
    sider: 256,
    page: 960,
    negativeIconButton: '-14px',
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
  shape: {
    borderRadius: 8,
  },
});
