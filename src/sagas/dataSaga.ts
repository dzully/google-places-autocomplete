import { takeLatest, put, call } from 'redux-saga/effects';
import { FETCH_DATA } from '../actions';

const fetchDataApi = async () => {
  return await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(async response => await response.json())
    .then(data => data)
    .catch(error => error);
};

export function* fetchData(): unknown {
  try {
    const data = yield call(fetchDataApi);
    yield put({ type: 'FETCH_SUCCESS', data });
  } catch (error) {
    yield put({ type: 'FETCH_ERROR', error });
  }
}

export function* watchFetchData() {
  yield takeLatest(FETCH_DATA, fetchData);
}
