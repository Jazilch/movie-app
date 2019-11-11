/* eslint-disable no-undef */

'use es6';

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MovieList from '../../components/MovieList';

const movies = {
  data: [
    { id: 1, title: 'Joker', overview: 'Description of the Joker' },
    { id: 2, title: 'Terminator', overview: 'I am Arnold' },
    { id: 3, title: 'Midway', overview: 'Battle in WW2' }
  ]
};

describe('MovieList component', () => {
  let movielist;
  let getMoviesMock;
  beforeEach(() => {
    getMoviesMock = jest.fn();
    movielist = shallow(
      <MovieList movies={movies} getMovies={getMoviesMock} />
    );
  });

  it('renders component correctly', () => {
    expect(toJson(movielist)).toMatchSnapshot();
  });

  it('calls ComponentDidMount once', () => {
    const componentDidMountSpy = jest.spyOn(
      MovieList.prototype,
      'componentDidMount'
    );
    shallow(<MovieList movies={movies} getMovies={getMoviesMock} />);
    expect(componentDidMountSpy).toHaveBeenCalled();
    componentDidMountSpy.mockReset();
    componentDidMountSpy.mockRestore();
  });

  it('renders a loading indicator if no data', () => {
    const moviesNoData = {
      data: null
    };
    movielist = shallow(<MovieList movies={moviesNoData} />, {
      disableLifecycleMethods: true
    });
    expect(movielist.find('Loader').exists()).toEqual(true);
  });

  it('shows the movie grid', () => {
    expect(movielist.children().length).toEqual(3);
  });
});
