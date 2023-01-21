import { TestScheduler } from 'rxjs/testing';
import { updateSearchEpic } from './geocoder';
import { UPDATE_SEARCH, UPDATE_SEARCH_HISTORY } from '../actions/geocoder';

describe('updateSearchEpic', () => {
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should return a stream that emits UPDATE_SEARCH_HISTORY action with the search payload', () => {
    testScheduler.run(({ hot, expectObservable }) => {
      const action$ = hot('-a', {
        a: { type: UPDATE_SEARCH, search: { name: 'example' } }
      });
      const expected = '-a';
      const expectedValues = {
        a: { type: UPDATE_SEARCH_HISTORY, searchHistory: { name: 'example' } }
      };

      expectObservable(updateSearchEpic(action$)).toBe(
        expected,
        expectedValues
      );
    });
  });
});
