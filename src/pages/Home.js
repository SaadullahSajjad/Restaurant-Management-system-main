import React from "react";
import HomeSlider from "../components/HomeComp/HomeSlider";
import HomePopular from "../components/HomeComp/HomePopular";
import HomeDoor from "../components/HomeComp/HomeDoor";

const Home = () => {
  return (
    <React.Fragment>
      <HomeSlider />
      <HomePopular />
      <HomeDoor />
    </React.Fragment>
  );
};
export default Home;
