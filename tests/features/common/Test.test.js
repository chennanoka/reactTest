import React from 'react';
import { shallow } from 'enzyme';
import { Test } from '../../../src/features/common/Test';

describe('common/Test', () => {
  it('renders node with correct class name', () => {
    const props = {
      common: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Test {...props} />
    );

    expect(
      renderedComponent.find('.common-test').length
    ).toBe(1);
  });
});
