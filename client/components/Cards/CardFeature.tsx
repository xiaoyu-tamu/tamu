import React from 'react';
import { Card, CardMedia, Typography, Button } from '@material-ui/core';
import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core';

import classnames from 'classnames';
import { StandardProps } from 'types';
import { getProps } from 'services/utils';
import { Link } from 'components/Link';

export interface Props extends StandardProps<DP> {
  title: string;
  description: string;
  href?: string;
  image: string;
}

type P = Readonly<Props> & WithStyles<typeof styles>;
type DP = typeof defaultProps;

// --------------------------------------------------

const defaultProps = {
  primaryActionText: 'Get started',
  secondaryActionText: 'Learn more',
};

const CardFeature: React.SFC<P> = (props) => {
  const {
    classes,
    className,
    title,
    description,
    href,
    image,
    primaryActionText,
    secondaryActionText,
  } = getProps(props, defaultProps);
  const classNames = classnames(classes.root, className);

  return (
    <Card className={classNames}>
      <CardMedia className={classes.media} image={image} title="Contemplative Reptile" />

      <main className={classes.main}>
        <Typography variant="title" gutterBottom>
          {title}
        </Typography>
        <Typography color="textSecondary">{description}</Typography>
      </main>

      <aside className={classes.actions}>
        <Link href={href} variant="primary">
          <Typography variant="body1">{secondaryActionText}</Typography>
        </Link>
        <Button className={classes.primaryAction} color="primary">
          {primaryActionText}
        </Button>
      </aside>
    </Card>
  );
};

// --------------------------------------------------

const styles = ({ typography }: Theme) =>
  createStyles({
    root: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    actions: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '4px 4px 4px 16px',
    },

    primaryAction: {
      textTransform: 'none',
      fontSize: typography.body1.fontSize,
    },

    main: {
      padding: 16,
      flex: 1,
    },

    media: {
      height: 124,
    },
  });

export default withStyles(styles)(CardFeature);
