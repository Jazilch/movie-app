/* eslint-disable no-undef */

'use es6';

import { shallow } from 'enzyme';
import React from 'react';
import MovieSearch from '../../components/MovieSearch';

describe('MovieSearch component', () => {
  let moviesearch;
  it('correctly renders the component', () => {
    moviesearch = shallow(<MovieSearch />);
    expect(moviesearch).toMatchSnapshot();
  });
});
