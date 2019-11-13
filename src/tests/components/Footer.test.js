/* eslint-disable no-undef */

'use es6';

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Footer from '../../components/Footer';

describe('Footer component', () => {
  let footer;

  beforeEach(() => {
    footer = shallow(<Footer />);
  });

  it('renders component correctly', () => {
    expect(toJson(footer)).toMatchSnapshot();
  });

  it('displays the correct copyright info', () => {
    expect(footer.find('p').text()).toEqual('Created with ❤️ by James Zilch');
  });
});
