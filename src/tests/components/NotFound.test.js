/* eslint-disable no-undef */

'use es6';

import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../../components/NotFound';

it('renders the not found page without crashing', () => {
  shallow(<NotFound />);
});
