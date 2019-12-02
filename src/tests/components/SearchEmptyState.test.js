/* eslint-disable no-undef */

'use es6';

import React from 'react';
import { shallow } from 'enzyme';
import SearchEmptyState from '../../components/SearchEmptyState';

describe('SearchEmptyState component', () => {
  it('correctly renders SearchEmptyState', () => {
    const searchemptystate = shallow(<SearchEmptyState />);
    expect(searchemptystate).toMatchSnapshot();
  });
});
