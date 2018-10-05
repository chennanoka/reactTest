import React from 'react';
import { shallow } from 'enzyme';
import { Bloglist } from '../../../src/features/blog';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Bloglist />);
  expect(renderedComponent.find('.blog-bloglist').length).toBe(1);
});
