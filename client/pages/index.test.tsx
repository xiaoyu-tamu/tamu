import Index from './index';
import * as React from 'react';

import { render } from 'react-testing-library';

test('title', () => {
  const { getByText } = render(<Index />);

  const btn = getByText('Index Page');

  expect(btn.textContent).toMatch('Index Page');
});
