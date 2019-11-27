'use es6';

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DefaultLoader from '../../components/DefaultLoader';

describe('Default Loader component', () => {
  it('renders the component correctly', () => {
    const defaultloader = shallow(<DefaultLoader />);
    expect(toJson(defaultloader)).toMatchSnapshot();
  });
});
