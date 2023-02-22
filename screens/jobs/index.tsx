import { Box } from "@chakra-ui/react";
import { JobList, Search } from "../jobs/components";
import { Taglist } from "./components/Taglist";

export default function Jobs() {
  return (
    <>
      <Box w={"full"}>
        <Box
          bg="lightBlueBackground"
          h="118px"
          mx="auto"
          mt="97px"
          zIndex="-1"
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
        />

        <Box bg="white" mt="97px">
          <Search />
          <Taglist />
          <JobList />
        </Box>
      </Box>
    </>
  );
}
4;
