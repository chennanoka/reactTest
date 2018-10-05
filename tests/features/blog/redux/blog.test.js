import {
  BLOG_BLOG,
} from '../../../../src/features/blog/redux/constants';

import {
  blog,
  reducer,
} from '../../../../src/features/blog/redux/blog';

describe('blog/redux/blog', () => {
  it('returns correct action by blog', () => {
    expect(blog()).toHaveProperty('type', BLOG_BLOG);
  });

  it('handles action type BLOG_BLOG correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: BLOG_BLOG }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
