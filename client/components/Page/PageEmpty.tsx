import * as React from 'react';
import { Card, Typography, CardContent } from '@material-ui/core';
import * as classnames from 'classnames';
import { StandardProps } from 'types';
import { decorate, Classes } from './PageEmpty.styles';
import { getProps } from '../../services/utils/react';
import Link from '../Link/Link';

interface Image {
  src: string;
  alt: string;
}
export interface Props extends StandardProps<DP> {
  show?: boolean;
  description: string;
  link?: string;
  linkText?: string;
}

const defaultProps = {
  image: {
    src: 'static/images/empty-state.png',
  } as Image,
};

type P = Readonly<Props> & Classes;
type DP = Readonly<typeof defaultProps>;

// --------------------------------------------------

export const PageEmpty: React.SFC<P> = (props) => {
  const { classes, className, children, show, description, link, linkText, image } = getProps(
    props,
    defaultProps
  );
  const root = classnames(classes.root, className);

  return show ? (
    <div className={root}>
      <Card className={classes.card}>
        <CardContent>
          <div className={classes.main}>
            <div className={classes.image}>
              <img src={image.src} alt={image.alt} />
            </div>
            <Typography variant="subheading" gutterBottom className={classes.description}>
              {description}
            </Typography>
            <Link href={link || '/test'}>
              <Typography color="primary">{linkText}</Typography>
            </Link>
            <div className={classes.extra}>{children}</div>
          </div>
        </CardContent>
      </Card>
    </div>
  ) : null;
};

export default decorate(PageEmpty);
