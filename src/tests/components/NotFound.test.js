/* eslint-disable no-undef */

'use es6';

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NotFound from '../../components/NotFound';

it('renders the not found page correctly', () => {
  const notfound = shallow(<NotFound />);
  expect(toJson(notfound)).toMatchSnapshot();
});
