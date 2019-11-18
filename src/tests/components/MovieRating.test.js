/* eslint-disable no-undef */

'use es6';

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MovieRating from '../../components/MovieRating';

describe('MovieRating component', () => {
  it('renders the MovieRating correctly', () => {
    const movierating = shallow(<MovieRating />);
    expect(toJson(movierating)).toMatchSnapshot();
  });
});
