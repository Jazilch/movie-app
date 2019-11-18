/* eslint-disable no-undef */

'use es6';

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MoviePage from '../../components/MoviePage';
import DefaultLoader from '../../components/DefaultLoader';

const movie = {
  data: [
    {
      title: 'Joker',
      overview: 'Description of the joker',
      poster_path: '',
      vote_average: 86,
      backdrop_path: '',
      release_date: 2019,
      tagline: 'Put a smile on'
    }
  ]
};

describe('Moviepage component', () => {
  let moviepage;
  let getMovieMock;
  beforeEach(() => {
    getMovieMock = jest.fn();
    moviepage = shallow(<MoviePage movie={movie} getMovie={getMovieMock} />);
  });

  it('renders the moviepage correctly', () => {
    expect(toJson(moviepage)).toMatchSnapshot();
  });

  it('calls componentDidMount once', () => {
    const componentDidMountSpy = jest.spyOn(
      MoviePage.prototype,
      'componentDidMount'
    );
    shallow(<MoviePage movie={movie} getMovie={getMovieMock} />);
    expect(componentDidMountSpy).toHaveBeenCalled();
    componentDidMountSpy.mockReset();
    componentDidMountSpy.mockRestore();
  });

  it('renders a loading indicator if no data', () => {
    const movieNoData = {
      data: null
    };
    moviepage = shallow(<MoviePage movie={movieNoData} />, {
      disableLifecycleMethods: true
    });
    expect(moviepage.find(DefaultLoader).exists()).toEqual(true);
  });
});
