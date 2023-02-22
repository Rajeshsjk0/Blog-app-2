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

const JobCard = () => {
  return (
    <Card maxW="md" bg={"white"}>
      <CardHeader>
        <Flex gap="4">
          <Flex
            flex="1"
            gap="4"
            alignItems="center"
            flexWrap="wrap"
            overflowWrap="anywhere"
          >
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            <Box>
              <Heading
                size="sm"
                color={"subHeading"}
                fontFamily="poppins"
                fontWeight={"600"}
                fontSize="0.875rem"
              >
                Segun Adebayo
              </Heading>
              <Text
                color={"paragraphs"}
                fontFamily="poppins"
                fontWeight={"400"}
                fontSize="1em"
              >
                Creator, Chakra UI
              </Text>
            </Box>
          </Flex>
          <Text
            color={"paragraphs"}
            fontFamily="poppins"
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
          fontFamily="poppins"
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
              fontFamily="poppins"
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
