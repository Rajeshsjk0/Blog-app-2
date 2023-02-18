import React from "react";
import {
  Card,
  Flex,
  Badge,
  Text,
  Box,
  Heading,
  Avatar,
  Image,
} from "@chakra-ui/react";
import MetaInfoIcon from "./MetaInfoIcon";

const RightCard = (props: any) => {
  return (
    <div style={props.style}>
      <Card direction={"row"} padding={"16px"}>
        <Flex direction={"column"} w={"70%"}>
          <Box paddingBottom={"14px"}>
            <Badge borderRadius={"10px"} fontSize="12px" colorScheme="green">
              Tech
            </Badge>
          </Box>
          <Heading
            fontSize="16px"
            color="#1F2937"
            fontWeight={600}
            lineHeight={"24px"}
            paddingBottom={"12px"}
          >
            Start a blog to reach your creative peak. Start a blog to reach your
            creative peak
          </Heading>
          <Flex paddingBottom={"12px"}>
            <Avatar
              padding={"0PX"}
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
            <Flex
              direction={"column"}
              paddingLeft="8px"
              justifyContent={"center"}
            >
              <Heading
                fontSize="14px"
                color={"#374151"}
                fontFamily="Poppins"
                fontWeight="500"
                paddingBottom={"4px"}
              >
                Joinh Davide
              </Heading>
              <Text fontSize="12px" color="#6B7280">
                May 20, 2021 · 3 min read
              </Text>
            </Flex>
          </Flex>
          <Flex height={"36px"} paddingBottom="20px">
            <MetaInfoIcon />
          </Flex>
        </Flex>
        <Flex w={"30%"}>
          <Image
            src="https://thumbs.dreamstime.com/b/man-silhouette-stand-alone-beach-watching-romantic-colorful-sunset-73828239.jpg"
            alt="Hero Section"
            width="100%"
            borderRadius={"16px"}
          />
        </Flex>
      </Card>
    </div>
  );
};

export default RightCard;
