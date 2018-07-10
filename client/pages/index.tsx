import * as React from 'react';
import { Button, Typography } from '@material-ui/core';
import { Page, PageHeader, PageEmpty, PageEmptyProps } from '../components/Page';
import { Link } from '../components/Link';

const pageEmptyProps: PageEmptyProps = {
  link: '/dashboard',
  linkText: 'Learn More',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
};

export default () => (
  <Page>
    <PageHeader title="Index" />
    <PageEmpty show {...pageEmptyProps}>
      <Button variant="raised" color="primary">
        yes
      </Button>
      <Typography style={{ marginTop: 24 }} color="textSecondary">
        Secondary text
      </Typography>
    </PageEmpty>
  </Page>
);
