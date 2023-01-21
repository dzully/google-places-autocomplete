import { TestScheduler } from 'rxjs/testing';
import fetchDataEpic from './map';
import { UPDATE_MAP, UPDATE_MAP_SUCCESS } from '../actions/map';

describe('fetchDataEpic', () => {
  it('dispatches the correct actions', () => {
    const marbles = '-a-b-c-|';
    const values = {
      a: { type: UPDATE_MAP, mapProperties: {} },
      b: { type: UPDATE_MAP_SUCCESS, mapProperties: {} }
    };

    const testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

    const input$ = testScheduler.createHotObservable(marbles, values);
    const output$ = fetchDataEpic(input$);

    testScheduler.expectObservable(output$).toBe('-b-', values);
  });
});
