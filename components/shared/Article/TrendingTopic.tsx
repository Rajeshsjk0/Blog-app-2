import { Flex, Heading, Text, Image } from "@chakra-ui/react";
import React from "react";

interface ChildComponentProps {
  title: string;
  image: string;
  subTitle: string;
}

const TrendingTopic: React.FC<ChildComponentProps> = (props) => {
  const { image, title, subTitle } = props;
  return (
    <Flex paddingBottom={"12px"} w="full">
      <Image
        padding={"0PX"}
        src={image}
        w={50}
        h={50}
        borderRadius={10}
        alt="image"
      />
      <Flex
        direction={"column"}
        paddingLeft="8px"
        justifyContent={"center"}
        w="full"
      >
        <Heading
          fontSize="14px"
          color={"heading"}
          fontWeight="500"
          paddingBottom={"4px"}
        >
          {title}
        </Heading>
        <Text fontSize="12px" color="subHeading">
          {subTitle}
        </Text>
      </Flex>
    </Flex>
  );
};

export default TrendingTopic;
