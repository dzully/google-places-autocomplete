import { Wrapper, Status } from '@googlemaps/react-wrapper';
import React from 'react';

interface MapWrapperProps {
  children?: React.ReactNode;
}

const render = (status: Status) => {
  return <h1 data-testid="GoogleMap">{status}</h1>;
};

const MapWrapper = ({ children }: MapWrapperProps) => {
  return (
    <Wrapper
      apiKey={process.env.REACT_APP_GOOGLE_MAP_KEY || ''}
      render={render}
    >
      {children}
    </Wrapper>
  );
};

MapWrapper.defaultProps = {
  children: undefined
};

export default MapWrapper;
