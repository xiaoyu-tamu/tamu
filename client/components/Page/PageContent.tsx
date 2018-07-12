import React from 'react';
import autobind from 'autobind-decorator';
import { AppBar, Tabs, Tab, Toolbar } from '@material-ui/core';
import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core';

import { StandardProps } from 'types';

export interface Props extends StandardProps {
  labels: string[];
}

type P = Readonly<Props> & WithStyles<typeof styles>;
type S = Readonly<typeof initialState>;

const initialState = {
  tab: 0,
};

// --------------------------------------------------

class PageContent extends React.Component<P, S> {
  readonly state: S = initialState;

  @autobind
  onTabChange(_e: React.ChangeEvent<{}>, tab: number) {
    this.setState({ tab });
  }
  render() {
    const { className, classes, labels, children } = this.props;
    if (labels.length !== React.Children.count(children)) {
      throw new Error('Children and labels must have same length.');
    }

    const { tab } = this.state;

    console.log(classes.tabRoot);
    return (
      <div className={className}>
        <AppBar position="static">
          <Toolbar>
            <Tabs
              classes={{ indicator: classes.tabIndicator, root: classes.tabRoot }}
              value={tab}
              onChange={this.onTabChange}
            >
              {labels.map((label) => (
                <Tab
                  disableRipple
                  classes={{
                    root: classes.tabRoot,
                    selected: classes.tabSelected,
                    labelContainer: classes.tabLabelContainer,
                  }}
                  key={label}
                  label={label}
                />
              ))}
            </Tabs>
          </Toolbar>
        </AppBar>
        <div>
          {React.Children.map(
            children,
            (child, index) => React.isValidElement(child) && tab === index && child
          )}
        </div>
      </div>
    );
  }
}

const styles = ({ typography }: Theme) =>
  createStyles({
    root: {},

    tabRoot: {
      textTransform: 'capitalize',
      textAlign: 'left',
      minWidth: 'unset',
      fontWeight: typography.fontWeightRegular,
      marginRight: 16,
    },

    tabSelected: {
      fontWeight: typography.fontWeightMedium,
    },

    tabIndicator: {
      backgroundColor: '#fff',
      borderRadius: '3px 3px 0 0',
      backgroundClip: 'content-box',
      height: 3,
    },

    tabLabelContainer: {
      // make indicator wider then actual text
      paddingLeft: 4,
      paddingRight: 4,
    },
  });

export default withStyles(styles)(PageContent);
