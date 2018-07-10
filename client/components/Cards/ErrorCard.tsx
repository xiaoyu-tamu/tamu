import React from 'react';
import classnames from 'classnames';
import { Card, Typography, CardContent } from '@material-ui/core';
import { StandardProps } from 'types';
import { getImage } from 'services/utils/helper';
import { getProps } from 'services/utils/react';
import { ImageType } from 'services/utils/constants';
import { Link } from 'components/Link';
import { decorate, Classes } from './ErrorCard.styles';

export interface Props extends StandardProps<DP> {
  description: string;
  imageType: ImageType;
  caption?: string;
}

type P = Readonly<Props> & Classes;
type DP = typeof defaultProps;
// --------------------------------------------------

const defaultProps = {
  linkHref: '/',
  linkText: 'Back To Home',
};

const ErrorCard: React.SFC<P> = (props) => {
  const {
    classes,
    className,
    children,
    description,
    linkHref,
    linkText,
    imageType,
    caption,
  } = getProps(props, defaultProps);

  return (
    <div className={classnames(classes.root, className)}>
      <Card className={classes.card}>
        <CardContent>
          <div className={classes.main}>
            <div className={classes.image}>
              <img {...getImage(imageType)} />
            </div>

            <Typography variant="subheading" gutterBottom className={classes.description}>
              {description}
            </Typography>

            {linkHref ? (
              <Link href={linkHref}>
                <Typography color="primary">{linkText}</Typography>
              </Link>
            ) : null}

            <div className={classes.extra}>{children}</div>
            <Typography style={{ marginTop: 24 }} color="textSecondary">
              {caption}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default decorate(ErrorCard);
