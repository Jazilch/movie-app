/* eslint-disable no-undef */

'use es6';

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MoviePage from '../../components/MoviePage';

describe('Moviepage component', () => {
  it('renders the moviepage correctly', () => {
    const moviepage = shallow(<MoviePage />);
    expect(toJson(moviepage)).toMatchSnapshot();
  });
});
