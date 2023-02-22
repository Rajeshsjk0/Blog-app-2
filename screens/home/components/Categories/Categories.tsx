import {
  Box,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import CategoryCard from "./CategorieCard";

const Categories = () => {
  const content = {
    heading: "Car",
    items: "19",
    image: "https://m.media-amazon.com/images/I/71NLqRJBGXL._SL1500_.jpg",
  };

  return (
    <Box w={"100%"} marginTop={110} padding={10}>
      <VStack spacing={5}>
        <Heading
          display="flex"
          justifyContent={"center"}
          fontWeight={"600"}
          fontSize={"36px"}
          color="heading"
        >
          Discover categories{" "}
        </Heading>
        <Text
          display="flex"
          justifyContent={"center"}
          fontWeight={"400"}
          fontSize={"16px"}
          color="subHeading"
        >
          Rating based on customer reviews
        </Text>
      </VStack>
      <SimpleGrid
        columns={{ base: 1, sm: 3, md: 4, lg: 5 }}
        gap={7}
        marginTop={10}
      >
        {Array(10)
          //@ts-ignore
          .fill()
          .map((_, i) => (
            <GridItem w="100%" cursor="pointer">
              <CategoryCard content={content} keyId={i} />
            </GridItem>
          ))}
      </SimpleGrid>
    </Box>
  );
};

export default Categories;
