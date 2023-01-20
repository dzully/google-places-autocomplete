import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { UPDATE_SEARCH, UPDATE_SEARCH_HISTORY } from '../actions/geocoder';
import { Places } from '../interface/geocoder';

export const updateSearchEpic = (action$: any) => {
  return action$.pipe(
    ofType(UPDATE_SEARCH),
    concatMap((action: { search: Places }) => {
      const { search } = action;

      return of({
        type: UPDATE_SEARCH_HISTORY,
        searchHistory: search
      });
    })
  );
};
