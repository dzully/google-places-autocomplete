export interface Places {
  formatted_address: string;
  geometry: Geometry;
  name: string;
  html_attributions: any[];
}

export interface Geometry {
  location: Location;
  viewport: Viewport;
}

export interface Viewport {
  south: number;
  west: number;
  north: number;
  east: number;
}

export interface Location {
  lat: number;
  lng: number;
}
