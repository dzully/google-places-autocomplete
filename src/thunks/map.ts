import { Dispatch, AnyAction } from 'redux';
import { patchMapProps } from '../actions';

interface PatchMapProps {
  mapProps: unknown;
}

export const handleMapProps = ({ mapProps }: PatchMapProps) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    dispatch(patchMapProps(mapProps));
  };
};
