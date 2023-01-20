import { Places } from './geocoder';

export interface actionProps {
  type: string;
  map: unknown;
  mapProperties: unknown;
  markerProperties: unknown;
  searchHistory: Places[];
  searchQuery: string;
}
