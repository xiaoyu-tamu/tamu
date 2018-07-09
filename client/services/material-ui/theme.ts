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
    sider: number;
  }
}

export const theme = createMuiTheme({
  palette: {
    background: {
      default: '#fff',
    },
  },
});
