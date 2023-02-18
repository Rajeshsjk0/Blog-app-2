import { Box, Flex, Text } from "@chakra-ui/react";
import {
  ArrowRight12Filled,
  ArrowUpload16Regular,
  Heart12Regular,
  MailInboxAll20Regular,
  SaveEdit20Regular,
} from "@fluentui/react-icons";
import React from "react";

const MetaInfoIcon = () => {
  return (
    <Flex gap={"32px"} alignItems="center" justifyContent={"center"} h="32px">
      <Flex
        justifyContent={"center"}
        alignItems="center"
        gap={"4px"}
        p="0"
        backdropFilter={" blur(10px);"}
        borderRadius={"9999px"}
      >
        <Heart12Regular />
        <Text
          fontStyle="normal"
          fontFamily={"Poppins"}
          fontWeight="400"
          fontSize="12px"
          lineHeight={"16px"}
          color="#374151"
        >
          2.2k
        </Text>
      </Flex>
      <Flex
        justifyContent={"center"}
        alignItems="center"
        gap={"4px"}
        p="0"
        backdropFilter={" blur(10px);"}
        borderRadius={"9999px"}
      >
        <MailInboxAll20Regular />
        <Text
          fontStyle="normal"
          fontFamily={"Poppins"}
          fontWeight="400"
          fontSize="12px"
          lineHeight={"16px"}
          color="#374151"
        >
          112
        </Text>
      </Flex>
      <Flex
        justifyContent={"center"}
        alignItems="center"
        gap={"4px"}
        p="0"
        backdropFilter={" blur(10px);"}
        borderRadius={"9999px"}
      >
        <SaveEdit20Regular />
      </Flex>
      <Flex
        justifyContent={"center"}
        alignItems="center"
        gap={"4px"}
        p="0"
        backdropFilter={" blur(10px);"}
        borderRadius={"9999px"}
      >
        <ArrowUpload16Regular />
      </Flex>
    </Flex>
  );
};

export default MetaInfoIcon;
