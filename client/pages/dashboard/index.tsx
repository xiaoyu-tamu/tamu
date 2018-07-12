import React from 'react';
import Root, { Metadata } from 'containers/Root/Root';
import { Button } from '@material-ui/core';
import { ImageType } from 'services/utils/constants';

const extraEmptyState = (
  <Button variant="raised" color="primary" href="/">
    See you soon
  </Button>
);

const metadata: Metadata = {
  isEmpty: true,
  isError: false,
  onEmpty: {
    imageType: ImageType.Error,
    description: 'This Page is Currently In Development',
    children: extraEmptyState,
  },
  onError: {
    imageType: ImageType.Error,
    description: 'Something wrong, This is the default Error Message',
    children: extraEmptyState,
  },
};

export default () => <Root metadata={metadata}>{}</Root>;
