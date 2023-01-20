import { ofType } from 'redux-observable';
import { of, map } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { UPDATE_SEARCH, UPDATE_SEARCH_HISTORY } from '../actions/geocoder';
import { Places } from '../interface/geocoder';
import { RootProps } from '../reducers/reducers';

export const updateSearchEpic = (action$: any, state$: any) => {
  console.log('hello');
  return action$.pipe(
    ofType(UPDATE_SEARCH),
    concatMap((action: { search: Places }) => {
      return state$.pipe(
        map((state: RootProps) => {
          const { search } = action;
          const latestState = state.map;
          const searchHistory = latestState.searchHistory;
          console.log({ latestState, searchHistory, search });
          return of({
            type: UPDATE_SEARCH_HISTORY,
            searchHistory: [...searchHistory, search]
          });
        })
      );
    })
  );
};
