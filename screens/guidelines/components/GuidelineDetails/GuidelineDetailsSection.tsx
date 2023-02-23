import { Box, Center } from "@chakra-ui/react";
import Guideline from "./Guideline";

export default function GuidelineSection() {
  return (
    <Box w="full" padding={{ base: 0, md: 10 }}>
      <Center gap={2}>
        <Guideline />
      </Center>
    </Box>
  );
}
