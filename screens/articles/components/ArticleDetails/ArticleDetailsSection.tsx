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
} from "@chakra-ui/react";
import Article from "./Article";
import Options from "./ArticleOptions";

export default function DetailsSection() {
  return (
    <Grid templateColumns="repeat(10, 1fr)" gap={2}>
      <GridItem colSpan={7} margin={5}>
        <Article />
      </GridItem>
      <GridItem colSpan={3} margin={5}>
       <Options />
      </GridItem>
    </Grid>
  );
}
