import React from 'react';
import { shallow } from 'enzyme';
import { Newblog } from '../../../src/features/blog';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Newblog />);
  expect(renderedComponent.find('.blog-newblog').length).toBe(1);
});
