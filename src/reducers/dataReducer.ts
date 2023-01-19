import { FETCH_DATA, FETCH_SUCCESS, FETCH_ERROR } from '../actions';

const initialState = {
  data: [],
  isLoading: false,
  error: null
};

interface actionProps {
  type: string;
  data: any;
  error: string;
}

export default function dataReducer(state = initialState, action: actionProps) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        data: action.data,
        isLoading: false,
        error: null
      };
    case FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
}
