import React from 'react';
import { shallow } from 'enzyme';
import { Home } from '../../../src/features/blog';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Home />);
  expect(renderedComponent.find('.blog-home').length).toBe(1);
});
