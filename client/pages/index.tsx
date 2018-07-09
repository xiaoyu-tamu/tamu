import * as React from 'react';
import { Button } from '@material-ui/core';
import { appName } from '../../shared/constants';

export default () => (
  <div>
    <h1>{appName}</h1>
    <Button color="secondary">Index Page</Button>
  </div>
);
