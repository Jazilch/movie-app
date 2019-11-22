/* eslint-disable no-undef */

'use es6';

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MovieListToolbar from '../../components/MovieListToolbar';

describe('MovieListToolbar Component', () => {
  let movielisttoolbar;

  it('renders the component correctly', () => {
    movielisttoolbar = shallow(<MovieListToolbar />);
    expect(toJson(movielisttoolbar)).toMatchSnapshot();
  });
});
