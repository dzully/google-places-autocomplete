import { Dispatch, AnyAction } from 'redux';
import { fetchDataStart, fetchDataSuccess, fetchDataFailure } from '../actions';

export const fetchData = () => async (dispatch: Dispatch<AnyAction>) => {
  try {
    dispatch(fetchDataStart());
    const request = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const response = await request.json();
    dispatch(fetchDataSuccess(response));
  } catch (error) {
    dispatch(fetchDataFailure(error));
  }
};
