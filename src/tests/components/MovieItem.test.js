/* eslint-disable no-undef */

'use es6';

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MovieItem from '../../components/MovieItem';

describe('MovieItem component', () => {
  let movieitem;
  const title = 'Joker';
  const overview = 'Description of the Joker';

  beforeEach(() => {
    movieitem = shallow(<MovieItem title={title} overview={overview} />);
  });

  it('correctly renders movie item', () => {
    expect(toJson(movieitem)).toMatchSnapshot();
  });

  it('renders the correct text', () => {
    expect(movieitem.find('h1').text()).toEqual('Joker');
    expect(movieitem.find('p').text()).toEqual('Description of the Joker');
  });
});
