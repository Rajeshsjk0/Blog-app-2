import {
  Box,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import SOP from "./Sop";
import Options from "./SopOptions";

export default function SopSection() {
  return (
    <Box w="full" padding={{base:0, md:10}}>
      <Grid templateColumns={{base :"repeat(1, 1fr)", md:"repeat(1, 1fr)", lg:"repeat(10, 1fr)"}} gap={2}>
        <GridItem colSpan={{base : 1, md:1,  lg:7}} margin={5}>
          <SOP />
        </GridItem>
        <GridItem  colSpan={{base : 1, md:1,  lg:3}} margin={5}>
          <Options />
        </GridItem>
      </Grid>
    </Box>
  );
}
