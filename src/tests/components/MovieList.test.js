/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */

'use es6';

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MovieList from '../../components/MovieList';

const movies = {
  data: [
    {
      id: 1,
      title: 'Joker',
      overview: 'Description of the Joker',
      genres: ['Crime', 'Drama', 'Thriller']
    },
    { id: 2, title: 'Terminator', overview: 'I am Arnold', genres: ['Action'] },
    {
      id: 3,
      title: 'Ready or Not',
      overview: "A bride's wedding night ",
      genres: ['Comedy', 'Horror', 'Mystery', 'Thriller']
    }
  ]
};

describe('MovieList component', () => {
  let movielist;
  let getMoviesMock;
  let store;
  beforeEach(() => {
    getMoviesMock = jest.fn();
    store = {
      movies,
      searchTerm: '',
      filterTerm: 'All',
      getMovies: getMoviesMock
    };
    movielist = shallow(<MovieList {...store} />);
  });

  it('renders component correctly', () => {
    expect(toJson(movielist)).toMatchSnapshot();
  });

  it('calls ComponentDidMount once', () => {
    const componentDidMountSpy = jest.spyOn(
      MovieList.prototype,
      'componentDidMount'
    );
    shallow(<MovieList {...store} />);
    expect(componentDidMountSpy).toHaveBeenCalled();
    componentDidMountSpy.mockReset();
    componentDidMountSpy.mockRestore();
  });

  it('renders a loading indicator if no data', () => {
    movielist.setProps({ movies: { data: null } });
    expect(movielist.find('DefaultLoader').exists()).toEqual(true);
  });

  it('shows the correct number of items', () => {
    expect(movielist.find('MovieList__MovieListGrid').children().length).toBe(
      3
    );
  });

  it('can search movies via a search term', () => {
    movielist.setProps({ searchTerm: 'Term' });
    expect(
      movielist
        .find('MovieList__MovieListGrid')
        .children()
        .prop('title')
    ).toEqual('Terminator');
  });

  it('is case insensitive', () => {
    movielist.setProps({ searchTerm: 'term' });
    expect(
      movielist
        .find('MovieList__MovieListGrid')
        .children()
        .prop('title')
    ).toEqual('Terminator');
  });

  it('can filter results', () => {
    movielist.setProps({ filterTerm: 'Horror' });
    expect(
      movielist
        .find('MovieList__MovieListGrid')
        .children()
        .prop('title')
    ).toEqual('Ready or Not');
  });

  it('shows empty state if no results', () => {
    movielist.setProps({ filterTerm: 'Western' });
    expect(movielist.find('SearchEmptyState').exists()).toEqual(true);
  });
});
