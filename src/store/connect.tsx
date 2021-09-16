import React from 'react';
import { StoreContext } from './hooks/useStore';

const mapStateToPropsMock = (obj, props) => ({
  ...props,
});

const Connect = (mapStateToProps: any) => (Component: any) => {
  return (props: any) => (
    <StoreContext.Consumer>
      {({ dispatch, store }: any) => {
        const storeProps = mapStateToProps
          ? { ...mapStateToProps(store, props) }
          : { ...mapStateToPropsMock(store, props) };
        return <Component {...storeProps} dispatch={dispatch} />;
      }}
    </StoreContext.Consumer>
  );
};

export default Connect;
