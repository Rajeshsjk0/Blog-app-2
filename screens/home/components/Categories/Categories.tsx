import { Box, Card, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

import CategoryCard from "./CategorieCard";

const Categories = () => {
  const content = {
    heading: "Car",
    items: "19",
    image: "https://m.media-amazon.com/images/I/71NLqRJBGXL._SL1500_.jpg",
  };
  const renderedItems1 = [];
  for (let i = 0; i < 5; i++) {
    renderedItems1.push(
      <CategoryCard
        width="18.5%"
        content={content}
        imageHeight="80px"
        keyId={i}
      />
    );
  }

  const renderedItems2 = [];
  for (let i = 0; i < 5; i++) {
    renderedItems2.push(
      <CategoryCard
        width="15.1%"
        imageHeight="70px"
        content={content}
        keyId={i}
      />
    );
  }

  return (
    <Box w={"100%"} marginTop="128px">
      <Heading
        w={"100%"}
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
        fontFamily="Poppins"
        fontWeight={"600"}
        lineHeight="40px"
        fontSize={"36px"}
        color="#1F2937"
      >
        Discover categories
      </Heading>
      <Text
        w={"100%"}
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
        fontFamily="Poppins"
        fontWeight={"400"}
        lineHeight="24px"
        fontSize={"16px"}
        color="#6B7280"
      >
        Rating based on customer reviews
      </Text>
      <Flex
        paddingTop={"30px"}
        w={"100%"}
        flexWrap={"wrap"}
        justifyContent="space-between"
        alignItems={"center"}
        direction={"row"}
      >
        {renderedItems1}
      </Flex>
      <Flex
        paddingTop={"30px"}
        w={"100%"}
        flexWrap={"wrap"}
        justifyContent="flex-start"
        direction={"row"}
        gap="24px"
      >
        {renderedItems2}
      </Flex>
    </Box>
  );
};

export default Categories;
