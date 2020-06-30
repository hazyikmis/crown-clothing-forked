import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.hoc.styles";

//All HOCs accepts a regular component as props and returns a functional component
const WithSpinnerHoc = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );
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