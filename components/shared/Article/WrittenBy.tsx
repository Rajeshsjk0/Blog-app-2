import { Flex, Heading, Text, Image } from "@chakra-ui/react";
import React from "react";

interface ChildComponentProps {
  title: string;
  image: string;
  subTitle: string;
}

const WrittenBy: React.FC<ChildComponentProps> = (props) => {
  const { image, title, subTitle } = props;
  return (
    <Flex paddingBottom={"12px"} w="full" h="full" gap={2}>
      <Image
        padding={"0PX"}
        src={image}
        w={"100px"}
        h={"100px"}
        borderRadius={10}
        alt="image"
      />
      <Flex
        direction={"column"}
        paddingLeft="8px"
        justifyContent={"center"}
        w="full"
        alignItems="stretch"
        gap={1}
      >
        <Text fontSize="12px" color="subHeading">
          WRITEN BY
        </Text>
        <Heading fontSize="18px" color={"heading"} fontWeight="500">
          {title}
        </Heading>
        <Text fontSize="14px" color="subHeading">
          {subTitle}
        </Text>
      </Flex>
    </Flex>
  );
};

export default WrittenBy;
