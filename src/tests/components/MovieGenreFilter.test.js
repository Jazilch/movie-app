/* eslint-disable no-undef */

'use es6';

import React from 'react';
import { shallow } from 'enzyme';
import MovieGenreFilter from '../../components/MovieGenreFilter';

describe('MovieGenreFilter', () => {
  it('renders the component correctly', () => {
    const moviegenrefilter = shallow(<MovieGenreFilter />);
    expect(moviegenrefilter).toMatchSnapshot();
  });
});
