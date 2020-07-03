//Error boundaries do not catch errors inside event handlers.
//React doesn’t need error boundaries to recover from errors in event handlers. Unlike the render method and lifecycle methods, the event handlers don’t happen during rendering. So if they throw, React still knows what to display on the screen.
//If you need to catch an error inside event handler, use the regular JavaScript try / catch statement.

import React from "react";

import {ErrorImageOverlay, ErrorImageContainer, ErrorImageText} from "./error-boundary.styles"

class ErrorBoundary extends React.Component {
  state = {
    hasErrored: false,
  };

  static getDerivedStateFromError(error) {
    //process the error
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      //return <div>Something went wrong!</div>;
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/O0DCcQy.png" />
          <ErrorImageText>Sorry this ice-cream is dropped to the ground!</ErrorImageText>
        </ErrorImageOverlay>
      )
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

//its possible to define multiple error boundaries & error messages / differently process these errors