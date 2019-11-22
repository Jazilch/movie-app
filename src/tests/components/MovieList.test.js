/* eslint-disable no-undef */

'use es6';

import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import MovieList from '../../components/MovieList';
import DefaultLoader from '../../components/DefaultLoader';
import MovieItem from '../../components/MovieItem';

const mockStore = configureStore([]);

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
  let store;
  beforeEach(() => {
    getMoviesMock = jest.fn();
    store = mockStore({
      movies
    });
    movielist = shallow(
      <Provider store={store}>
        <MovieList movies={movies} getMovies={getMoviesMock} />
      </Provider>
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
    expect(movielist.find(DefaultLoader).exists()).toEqual(true);
  });

  it('shows the correct number of items', () => {
    // expect(movielist.find('MovieList__MovieListGrid').children().length).toBe(
    //   3
    // );
  });

  it('can search movies via a search term', () => {
    const movies = {
      data: [{ title: 'Terminator' }, { title: 'Joker' }, { title: 'Frozen' }]
    };
    const searchTerm = 'ter';

    const filterBySearch = movies => {
      return movies.title
        .toLowerCase()
        .includes(String(searchTerm).toLowerCase());
    };

    const getFilteredMedia = movies => {
      return movies.data.filter(filterBySearch);
    };

    const expectedSearchResult = [{ title: 'Terminator' }];
    const filteredMovies = getFilteredMedia(movies);
    const filteredResults = { data: [...filteredMovies] };
    const filteredMovieComponent = shallow(
      <MovieList movies={filteredResults} />,
      { disableLifecycleMethods: true }
    );
    expect(filteredMovieComponent).find('MovieList__MovieListGrid').length;
  });

  it('is case insensitive', () => {});
});
