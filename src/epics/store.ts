import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import rootReducer from '../reducers/reducers';
import fetchDataEpic from './map';

const rootEpic = combineEpics(fetchDataEpic);
const epicMiddleware = createEpicMiddleware();

const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);

export default store;
