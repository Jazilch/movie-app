/* eslint-disable no-undef */

'use es6';

import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../components/Footer';

describe('Footer component', () => {
  let footer;

  beforeEach(() => {
    footer = shallow(<Footer />);
  });

  it('displays the correct copyright info', () => {
    expect(footer.find('p').text()).toEqual('Created with ❤️ by James Zilch');
  });

  it('matches snapshot', () => {
    expect(footer).toMatchSnapshot();
  });
});
