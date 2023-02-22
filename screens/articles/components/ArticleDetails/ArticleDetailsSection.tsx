import UserInfo from "@/components/shared/NewsCards/UserInfoContainer/UserInfo";
import {
  Text,
  Box,
  HStack,
  Tag,
  TagLabel,
  Grid,
  GridItem,
  Wrap,
  VStack,
  Container,
} from "@chakra-ui/react";
import Article from "./Article";
import Options from "./ArticleOptions";

export default function DetailsSection() {
  return (
    <Box w="full" padding={{base:0, md:10}}>
      <Grid templateColumns={{base :"repeat(1, 1fr)", md:"repeat(1, 1fr)", lg:"repeat(10, 1fr)"}} gap={2}>
        <GridItem colSpan={{base : 1, md:1,  lg:7}} margin={5}>
          <Article />
        </GridItem>
        <GridItem  colSpan={{base : 1, md:1,  lg:3}} margin={5}>
          <Options />
        </GridItem>
      </Grid>
    </Box>
  );
}
