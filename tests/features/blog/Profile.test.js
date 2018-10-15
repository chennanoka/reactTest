import React from 'react';
import { shallow } from 'enzyme';
import { Profile } from '../../../src/features/blog';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Profile />);
  expect(renderedComponent.find('.blog-profile').length).toBe(1);
});
