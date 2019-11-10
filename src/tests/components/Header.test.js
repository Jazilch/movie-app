/* eslint-disable no-undef */

'use es6';

import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

describe('Header component', () => {
  let header;

  beforeEach(() => {
    header = shallow(<Header />);
  });

  it('matches snapshot', () => {
    expect(header).toMatchSnapshot();
  });
});
