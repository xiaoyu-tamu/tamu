import React from 'react';
import { shallow } from 'enzyme';

import A from './a';

describe('NiceCheckbox', () => {
  it('renders the checkbox with correct label', () => {
    const wrapper = shallow(<A />);
    expect(wrapper.text()).toEqual('a');
  });
});
