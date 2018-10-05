import {
  BLOG_USER,
} from '../../../../src/features/blog/redux/constants';

import {
  user,
  reducer,
} from '../../../../src/features/blog/redux/user';

describe('blog/redux/user', () => {
  it('returns correct action by user', () => {
    expect(user()).toHaveProperty('type', BLOG_USER);
  });

  it('handles action type BLOG_USER correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: BLOG_USER }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
