import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { BadgeFilled } from "@fluentui/react-icons";
import UserInfo from "@/components/shared/NewsCards/UserInfoContainer/UserInfo";

const JobCard = () => {
  return (
    <Card maxW="md" bg={"white"} borderRadius={24}>
      <CardHeader>
        <Flex gap="4">
          <Flex
            flex="1"
            gap="4"
            alignItems="center"
            flexWrap="wrap"
            overflowWrap="anywhere"
          >
            <UserInfo userName=" Segun Adebayo" date=" Creator, Chakra UI" image="https://bit.ly/sage-adebayo" />
           
          </Flex>
          <Text
            color={"paragraphs"}
            fontWeight={"400"}
            fontSize="1em"
          >
            Posted Days Ago
          </Text>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text
          color={"heading"}
          fontWeight={"400"}
          fontSize="0.875rem"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut corporis
          ducimus aliquam veritatis sed nostrum assumenda sunt laborum adipisci.
          Quisquam ducimus voluptatibus ipsa provident repudiandae illum
          voluptates molestias eum odit.
        </Text>
      </CardBody>
      <CardFooter
        display={"flex"}
        justifyContent={"flex-start"}
        alignItems="center"
      >
        <Box
          bg="rgba(229, 231, 235, 0.5)"
          backdropFilter="blur(10px)"
          borderRadius="999px"
          maxW="150px"
          px="2"
          py="1"
        >
          <Flex align="center" gap={1}>
            <BadgeFilled />
            <Text
              as="span"
              color={"heading"}
              fontWeight={"400"}
              fontSize="0.875rem"
            >
              Full Time
            </Text>
          </Flex>
        </Box>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
