import React, { ComponentType } from 'react';
import { useSelector } from 'react-redux';
import { RootProps } from '../reducers/reducers';

const withMap = <P extends object>(WrappedComponent: ComponentType<P>) =>
  function claimContext(componentProps: P | any) {
    const data = useSelector((state: RootProps) => state?.map);
    const map = data.map;

    const component = (
      <WrappedComponent {...componentProps}>
        {componentProps.children}
      </WrappedComponent>
    );

    return map ? component : null;
  };

export default withMap;
