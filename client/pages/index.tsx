import React from 'react';
import Root, { Metadata } from '../containers/Root';
import { Button } from '@material-ui/core';
import { ImageType } from '../services/utils/constants';

const extraEmptyState = (
  <Button variant="raised" color="primary">
    yes
  </Button>
);

const metadata: Metadata = {
  isEmpty: true,
  isError: false,
  onEmpty: {
    imageType: ImageType.Error,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    children: extraEmptyState,
  },
  onError: {
    imageType: ImageType.Error,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    children: extraEmptyState,
  },
};

export default () => <Root metadata={metadata}>{}</Root>;
