import * as React from 'react';
import Link from 'next/link';
import { Button } from '@material-ui/core';

export default () => (
  <ul>
    <Button> Hello world</Button>
    <li>
      <Link href="/a" as="/a">
        <a>a</a>
      </Link>
    </li>
    <li>
      <Link href="/b" as="/b">
        <a>b</a>
      </Link>
    </li>
  </ul>
);
