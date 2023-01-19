import { PATCH_MAP_PROPS } from '../actions';
import { actionProps } from '../interface/reducers';

export interface mapInitialState {
  map: unknown;
}

const initialState: mapInitialState = {
  map: null
};

export default function mapReducer(state = initialState, action: actionProps) {
  switch (action.type) {
    case PATCH_MAP_PROPS:
      return {
        ...state,
        map: action.data
      };

    default:
      return state;
  }
}
