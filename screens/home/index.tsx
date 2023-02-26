import { Flex } from "@chakra-ui/react";
import React from "react";
import { Categories, Hero, SectionMagazine, Videos } from "./components";
import SectionVerticals from "./components/Sections/SectionVerticals";

const HomeScreen = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding={"5%"}
    >
      <Hero />
      <Categories />
      {/* <SectionMagazine /> */}
      <Videos />
      <SectionVerticals />
    </Flex>
  );
};

export default HomeScreen;
