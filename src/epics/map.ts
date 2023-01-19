import { ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UPDATE_MAP, UPDATE_MAP_SUCCESS } from '../actions/map';

export const fetchDataEpic = (action$: any) => {
  return action$.pipe(
    ofType(UPDATE_MAP),
    switchMap((action: { map: unknown }) => {
      return of({
        type: UPDATE_MAP_SUCCESS,
        map: action.map
      });
    })
  );
};

export default fetchDataEpic;
