import { Box } from "@chakra-ui/react";
import {
  GuidelineList,
  Search,
} from "./components";

export default function Guidelines() {
  return (
    <Box w={"full"}>
      <Box
        bg="lightBlueBackground"
        h="120px"
      />

      <Box bg="white" >
        <Search />
        <GuidelineList />
      </Box>
    </Box>
  );
}
