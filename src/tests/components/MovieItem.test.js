/* eslint-disable no-undef */

'use es6';

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MovieItem from '../../components/MovieItem';

describe('MovieItem component', () => {
  let movieitem;
  let showMoviePageMock;
  const title = 'Joker';
  const overview = 'Description of the Joker';
  const genres = ['Crime', 'Drama', 'Thriller'];

  beforeEach(() => {
    showMoviePageMock = jest.fn();
    movieitem = shallow(
      <MovieItem
        title={title}
        overview={overview}
        genres={genres}
        showMoviePage={showMoviePageMock}
      />
    );
  });

  it('correctly renders movie item', () => {
    expect(toJson(movieitem)).toMatchSnapshot();
  });

  it('renders the correct text', () => {
    expect(movieitem.find('h1').text()).toEqual('Joker');
    expect(movieitem.find('p').text()).toEqual('Description of the Joker');
    expect(movieitem.find('span').text()).toEqual('Crime, Drama, Thriller');
  });
});
