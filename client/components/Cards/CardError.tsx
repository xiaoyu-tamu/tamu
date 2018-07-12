import React from 'react';
import classnames from 'classnames';
import { Card, Typography, CardContent } from '@material-ui/core';
import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core';
import { StandardProps } from 'types';
import { getImage } from 'services/utils/helper';
import { ImageType } from 'services/utils/constants';
import { Link } from 'components/Link';

export interface Props extends StandardProps {
  description: string;
  imageType: ImageType;
  caption?: string;
  linkHref?: string;
  linkText?: string;
}

type P = Readonly<Props> & WithStyles<typeof styles>;

// --------------------------------------------------

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
  } = props;

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

            {linkHref &&
              linkText && (
                <Link href={linkHref}>
                  <Typography color="primary">{linkText}</Typography>
                </Link>
              )}

            <div className={classes.extra}>{children}</div>

            {caption && (
              <Typography style={{ marginTop: 24 }} color="textSecondary">
                {caption}
              </Typography>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// --------------------------------------------------

const styles = ({ breakpoints, mixins }: Theme) =>
  createStyles({
    root: mixins.gutters({
      padding: '48px 0',
      flex: 1,
      width: '100%',
    }),

    card: {
      margin: '0 auto',
      maxWidth: 936,
      minHeight: 280,

      [breakpoints.down('sm')]: {
        textAlign: 'center',
      },
    },

    main: {
      maxWidth: 576,
      margin: '52px auto',
      paddingLeft: 184,
      position: 'relative',

      [breakpoints.down('sm')]: {
        maxWidth: 320,
        paddingTop: 96,
        paddingLeft: 0,
      },
    },

    extra: {
      marginTop: 24,
    },

    description: {
      [breakpoints.down('sm')]: {
        marginTop: 36,
      },
    },
    image: {
      position: 'absolute',
      width: 144,
      height: 144,
      top: 0,
      left: -10,

      [breakpoints.down('sm')]: {
        left: '50%',
        transformOrigin: 'top center',
        transform: 'translate(-50%,0) scale(0.66667)',
      },

      '& > img': {
        width: 192,
        height: 192,
        position: 'absolute',
        left: -24,
        top: -24,
      },
    },
  });

export default withStyles(styles)(ErrorCard);
