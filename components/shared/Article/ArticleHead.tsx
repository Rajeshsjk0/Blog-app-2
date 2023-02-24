import { Flex, Heading, Text, Image, Avatar, Center, Divider, Hide, HStack, Tag, TagLabel, TagLeftIcon } from "@chakra-ui/react";
import { Heart16Regular, Comment16Regular } from "@fluentui/react-icons";
import React from "react";

// interface ChildComponentProps {
//   title: string;
//   image: string;
//   subTitle: string;
// }

const ArticleHead  =() => {
  return (
    <>
      <>
        <HStack spacing={2} margin={5}>
          <Avatar
            name={"userName"}
            size="sm"
            src={"https://bit.ly/dan-abramov"}
          />
          <Flex paddingLeft="8px" justifyContent={"center"}>
            <Heading fontSize="16px" color={"#374151"} fontWeight="500">
              {"Joinh Davide    May 20, 2021  ·  3 min read"}
            </Heading>
          </Flex>
        </HStack>

        <Center width={{ base: "90%", md: "70%" }}>
          <Heading
            fontSize={{ base: "24px", md: "40px" }}
            color={"heading"}
            fontWeight="500"
            textAlign="center"
          >
            {"Julio Urías does it all as Dodgers sweep in San Francisco"}
          </Heading>
        </Center>
        <Flex justify="center" w={"full"}>
          <Flex
            w={["90%", "80%", "70%", "60%"]}
            wrap="wrap"
            align="center"
            justify="center"
            gap={4}
          >
            <HStack>
              <Tag borderRadius={"10px"} fontSize="12px">
                <TagLeftIcon boxSize="18px" as={Heart16Regular} />
                <TagLabel color="blueBack">223</TagLabel>
              </Tag>
              <Tag borderRadius={"10px"} fontSize="12px">
                <TagLeftIcon boxSize="18px" as={Comment16Regular} />
                <TagLabel color="blueBack">112</TagLabel>
              </Tag>
            </HStack>
            <Hide below="sm">
              <Center height="30px">
                <Divider orientation="vertical" />
              </Center>
            </Hide>
            <HStack>
              <Tag borderRadius={"10px"}>
                <Heart16Regular />
              </Tag>
              <Tag borderRadius={"10px"}>
                <Comment16Regular />
              </Tag>
              <Tag borderRadius={"10px"}>
                <Heart16Regular />
              </Tag>
              <Tag borderRadius={"10px"}>
                <Comment16Regular />
              </Tag>
            </HStack>
            <Hide below="sm">
              <Center height="30px">
                <Divider orientation="vertical" />
              </Center>
            </Hide>
            <HStack>
              <Tag borderRadius={"10px"} fontSize="12px">
                <TagLeftIcon boxSize="18px" as={Heart16Regular} />
                <TagLabel color="blueBack">223</TagLabel>
              </Tag>
              <Tag borderRadius={"10px"} fontSize="12px">
                <TagLeftIcon boxSize="18px" as={Comment16Regular} />
                <TagLabel color="blueBack">112</TagLabel>
              </Tag>
            </HStack>
          </Flex>
        </Flex>
      </>
    </>
  );
};

export default ArticleHead;
