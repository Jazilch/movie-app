/* eslint-disable no-undef */

'use es6';

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from '../../components/Header';

describe('Header component', () => {
  let header;

  beforeEach(() => {
    header = shallow(<Header />);
  });

  it('renders header correctly', () => {
    expect(toJson(header)).toMatchSnapshot();
  });
});
