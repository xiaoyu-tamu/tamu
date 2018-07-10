import React from 'react';
import Root, { Metadata } from '../../containers/Root';
import { Button } from '@material-ui/core';

const extraEmptyState = (
  <Button variant="raised" color="primary">
    yes
  </Button>
);

const metadata: Metadata = {
  isEmpty: true,
  onPageEmpty: {
    linkHref: '/dashboard',
    linkText: 'Learn More',
    imageSrc: '/static/images/empty-state.png',
    imageAlt: 'empty-state',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    caption: 'additional infomation',
    children: extraEmptyState,
  },
};

export default () => <Root metadata={metadata}>{}</Root>;
