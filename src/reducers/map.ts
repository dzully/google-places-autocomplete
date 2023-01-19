import { UPDATE_MAP_SUCCESS } from '../actions/map';
import { actionProps } from '../interface/reducers';

export interface mapInitialState {
  map: unknown;
  test: string;
}

const initialState: mapInitialState = {
  map: null,
  test: ''
};

export default function mapReducer(state = initialState, action: actionProps) {
  switch (action.type) {
    case UPDATE_MAP_SUCCESS:
      return {
        ...state,
        map: action.map
      };

    default:
      return state;
  }
}
