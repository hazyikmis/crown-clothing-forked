import React from "react";

//import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.hoc.styles";
import Spinner from "../spinner/spinner.component";

const WithSpinnerHoc = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
};

export default WithSpinnerHoc;

/*
//If the WithSpinnerHoc definition is not clear to you, lets make it clear like below:
const WithSpinnerHoc = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};
*/


//NO REFERENCE TO THIS COMPONENT
//After using lazy & Suspense and referring "Spinner" component as fallback