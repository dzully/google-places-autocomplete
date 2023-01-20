import { Places } from './geocoder';

export interface actionProps {
  type: string;
  map: any;
  searchHistory: Places[];
}
