import {
  COMMON_TEST,
} from '../../../../src/features/common/redux/constants';

import {
  test,
  reducer,
} from '../../../../src/features/common/redux/test';

describe('common/redux/test', () => {
  it('returns correct action by test', () => {
    expect(test()).toHaveProperty('type', COMMON_TEST);
  });

  it('handles action type COMMON_TEST correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: COMMON_TEST }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
