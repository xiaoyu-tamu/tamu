import React from 'react';
import MuiPopover, { PopoverProps, PopoverOrigin } from '@material-ui/core/Popover';
import { getProps } from 'services/utils';

export interface Props extends PopoverProps, Partial<DP> {
  width?: number;
}

type P = Readonly<Props>;
type DP = typeof defaultProps;
type Anchor = 'left' | 'right';

const defaultProps = {
  anchor: 'left' as Anchor,
};

// --------------------------------------------------

const Popover: React.SFC<P> = (props) => {
  const { classes, anchor, width, ...rest } = getProps(props, defaultProps);
  const paperProps = width ? { style: { width } } : undefined;

  return <MuiPopover PaperProps={paperProps} {...getAnchorPosition(anchor)} {...rest} />;
};

export default Popover;

// --------------------------------------------------

function getAnchorPosition(anchor: Anchor) {
  const anchorLeft = { anchorOrigin: { vertical: 'bottom', horizontal: 'left' } as PopoverOrigin };
  const anchorRight = {
    anchorOrigin: { vertical: 'bottom', horizontal: 'right' } as PopoverOrigin,
    transformOrigin: { vertical: 'top', horizontal: 'right' } as PopoverOrigin,
  };
  return anchor === 'left' ? anchorLeft : anchorRight;
}
