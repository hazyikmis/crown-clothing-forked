import React, { Profiler } from "react";

import Directory from "../../components/directory/directory.component";

import { HomePageContainer } from "./homepage.styles";

const HomePage = () => (
  <HomePageContainer>
    <Profiler
      id="Directory"
      onRender={(id, phase, actualDuration) => {
        console.log({ id, phase, actualDuration });
      }}
    >
      <Directory />
    </Profiler>
  </HomePageContainer>
);

//to test Error Boundary
/*
const HomePage = () => {
  throw Error;
  return (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
)};
*/

export default HomePage;
