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
    store = {
      movies,
      searchTerm: '',
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
});
