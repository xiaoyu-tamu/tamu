import * as React from 'react';
import { Button, Typography } from '@material-ui/core';
import { Page, PageHeader, PageEmpty } from '../components/Page';

export default () => (
  <Page>
    <PageHeader title="Index" />
    <PageEmpty
      image={{ src: 'static/images/empty-state.png', alt: 'Empty State' }}
      show
      link="/"
      linkText="Learn More"
      description={`
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s
      `}
    >
      <Button variant="raised" color="primary">
        yes
      </Button>
      <Typography style={{ marginTop: 24 }} color="textSecondary">
        Secondary text
      </Typography>
    </PageEmpty>
  </Page>
);
