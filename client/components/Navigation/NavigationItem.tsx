import React from 'react';
import classNames from 'classnames';
import autobind from 'autobind-decorator';
import { ListItem, Button, Collapse } from '@material-ui/core';
import { StandardProps } from 'types';
import { Link } from 'components/Link';
import { getProps } from 'services/utils';
import { decorate, Classes } from './NavigationItem.styles';

export interface Props extends StandardProps<DP> {
  depth: number;
  href?: string;
  onClick?: () => void;
  title: string;
  details?: string;
}

type DP = typeof defaultProps;
type P = Readonly<Props> & Classes;
type S = Readonly<{ open: boolean }>;

const defaultProps = {
  forceOpen: false,
};
// --------------------------------------------------

class NavigationItem extends React.Component<P, S> {
  readonly state: S = {
    open: this.props.forceOpen!,
  };

  componentDidMount() {
    // give the parent element ability to open it
    console.log('cdm');

    if (!this.props.forceOpen) {
      return;
    }

    const activeElement = document.querySelector(`.${this.props.classes.active}`);
    if (activeElement && activeElement.scrollIntoView) {
      activeElement.scrollIntoView({});
    }
  }

  @autobind
  handleClick() {
    this.setState((s) => ({ open: !s.open }));
  }

  render() {
    const {
      children,
      classes,
      className,
      depth,
      href,
      onClick,
      title,
      forceOpen,
      details,
      ...rest
    } = getProps(this.props, defaultProps);

    const style = {
      paddingLeft: 8 * (3 + 2 * depth),
    };

    const { open } = this.state;
    return href ? (
      // child
      <ListItem className={classes.itemChild} disableGutters>
        <Button
          component={({ variant, ...props }) => <Link {...props} variant="button" href={href} />}
          className={classNames(classes.buttonChild, `depth-${depth}`)}
          disableRipple
          onClick={onClick}
          style={style}
        >
          {title}
        </Button>
      </ListItem>
    ) : (
      // container
      <ListItem className={classes.item} disableGutters {...rest}>
        <Button
          disableRipple
          classes={{ root: classes.button, label: classes.buttonLabel }}
          onClick={this.handleClick}
          style={style}
        >
          <span className={classes.title}>{title}</span>
          {open ? null : <span className={classes.details}>{details}</span>}
        </Button>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          {children}
        </Collapse>
      </ListItem>
    );
  }
}

export default decorate(NavigationItem);
