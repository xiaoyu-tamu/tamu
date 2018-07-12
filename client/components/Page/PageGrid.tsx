import React from 'react';
import classnames from 'classnames';
import Grid, { GridSpacing, GridProps, GridSize } from '@material-ui/core/Grid';
import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { StandardProps } from 'types';
import { withRoot, WithRoot } from 'containers/Root';
import { getProps } from 'services/utils';
import { Box } from 'components/Box';

export interface Props extends StandardProps<DP>, GridProps {}

type P = Readonly<Props> & WithStyles<typeof styles> & WithRoot;
type DP = typeof defaultProps;

// --------------------------------------------------

const defaultGridSizes: Partial<Record<Breakpoint, boolean | GridSize>> = {
  xs: 12,
  sm: 6,
  md: 6,
  lg: 4,
  xl: 3,
};

const defaultProps = {
  spacing: 16 as GridSpacing,
  fluid: false,
  ...defaultGridSizes,
};

const PageGrid: React.SFC<P> = (props) => {
  const {
    item: ignore1,
    container: ignore2,
    classes,
    className,
    children,
    spacing,
    root,
    fluid,
    ...rest
  } = getProps(props, defaultProps);
  const classNames = classnames(classes.root, className);

  return (
    <Box className={classNames} fluid={fluid}>
      <Grid container spacing={spacing}>
        {React.Children.map(children, (child) => (
          <Grid item {...rest}>
            {child}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

// --------------------------------------------------

const styles = ({  }: Theme) =>
  createStyles({
    root: {},
  });

export default withStyles(styles)(withRoot(PageGrid));
