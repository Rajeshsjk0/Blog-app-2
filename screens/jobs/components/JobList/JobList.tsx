import { VStack } from "@chakra-ui/react";
import { BadgeFilled } from "@fluentui/react-icons";
import React from "react";
import JobCard from "./JobCard";

const JobList = () => {
  return (
    <VStack
      mx={{ base: "auto", md: "0" }}
      alignItems={"flex-start"}
      mt="58px"
      ml={{ sm: "40px", md: "80px" }}
      gap={"20px"}
    >
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
    </VStack>
  );
};

export default JobList;
