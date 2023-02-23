import { Box } from "@chakra-ui/react";
import { JobList, Search } from "../jobs/components";
import { Taglist } from "./components/Taglist";

export default function Jobs() {
  return (
    <>
     <Box w={"full"}>
      <Box
        bg="lightBlueBackground"
        h="120px"
      />

      <Box bg="white" >
          <Search />
          <Taglist />
          <JobList />
        </Box>
      </Box>
    </>
  );
}
4;
