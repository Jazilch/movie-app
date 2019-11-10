/* eslint-disable no-undef */

'use es6';

import React from 'react';
import { shallow } from 'enzyme';
import MovieItem from '../../components/MovieItem';

describe('MovieItem component', () => {
  let movieitem;
  const title = 'Joker';
  const overview = 'Description of the Joker';

  beforeEach(() => {
    movieitem = shallow(<MovieItem />);
  });
  it('renders the correct text', () => {
    movieitem = shallow(<MovieItem title={title} overview={overview} />);

    expect(movieitem.find('h1').text()).toEqual('Joker');
    expect(movieitem.find('p').text()).toEqual('Description of the Joker');
  });

  it('correctly renders movie item', () => {
    expect(movieitem).toMatchSnapshot();
  });
});
