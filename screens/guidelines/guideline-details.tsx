import ArticleHead from "@/components/shared/Article/ArticleHead";
import { Grid, GridItem, Box, Image, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ReletedSuggestions, Article, CommentSection } from "./components";

export default function GuidelineDetails() {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname) {
    }
  }, [router.pathname]);

  return (
    <VStack spacing={5}>
      <ArticleHead />
      <Image
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        alt="Hero Section"
        width="100%"
      />
      <Box w="full">
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(1, 1fr)",
            lg: "repeat(10, 1fr)",
          }}
          gap={10}
          marginX={[3,10,10,10,20]}
          marginY={[3,10,10,10,10]}
        >
          <GridItem colSpan={{ base: 1, md: 1, lg: 7 }} >
            <Article />
            <CommentSection />
          </GridItem>
          <GridItem colSpan={{ base: 1, md: 1, lg: 3 }} >
            <ReletedSuggestions />
          </GridItem>
        </Grid>
      </Box>
    </VStack>
  );
}
