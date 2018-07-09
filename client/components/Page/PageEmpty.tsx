import * as React from 'react';
import { Card, Typography, CardContent } from '@material-ui/core';
import * as classnames from 'classnames';
import { StandardProps } from 'types';
import { decorate, Styles } from './PageEmpty.styles';

interface Image {
  src: string;
  alt: string;
}
export interface Props extends StandardProps {
  show?: boolean;
  description: string;
  link?: string;
  linkText?: string;
  image: Image;
}

type P = Readonly<Props> & Styles;

// --------------------------------------------------

export const PageEmpty: React.SFC<P> = ({
  classes,
  className,
  children,
  show,
  description,
  link,
  linkText,
  image,
}) => {
  const root = classnames(classes.root, className);

  return show ? (
    <div className={root}>
      <Card className={classes.card}>
        <CardContent>
          <div className={classes.main}>
            <div className={classes.image}>
              <img src={image.src} alt={image.alt} />
            </div>
            <Typography variant="subheading" gutterBottom>
              {description}
            </Typography>
            <a href={link}>
              <Typography color="primary">{linkText}</Typography>
            </a>
            <div className={classes.extra}>{children}</div>
          </div>
        </CardContent>
      </Card>
    </div>
  ) : null;
};

export default decorate(PageEmpty);
