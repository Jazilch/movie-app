/* eslint-disable no-undef */

'use es6';

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MovieListToolbar from '../../components/MovieListToolbar';

describe('MovieListToolbar Component', () => {
  it('renders the component correctly', () => {
    const movielisttoolbar = shallow(<MovieListToolbar />);
    expect(toJson(movielisttoolbar)).toMatchSnapshot();
  });
});
