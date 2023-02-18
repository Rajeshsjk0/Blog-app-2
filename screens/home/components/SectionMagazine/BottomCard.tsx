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

const BottomCard = () => {
  return (
    <Card>
      <Image
        src="https://thumbs.dreamstime.com/b/man-silhouette-stand-alone-beach-watching-romantic-colorful-sunset-73828239.jpg"
        alt="Hero Section"
        width="100%"
        height={"175px"}
      />
      <Box padding={"12px"}>
        <Badge borderRadius={"10px"} fontSize="12px" colorScheme="green">
          Tech
        </Badge>
        <Heading
          width={"72%"}
          fontSize="14px"
          color="#111827"
          fontWeight={600}
          lineHeight={"24px"}
          paddingBottom={"10px"}
        >
          My Google Interview Experience (UX Design)
        </Heading>
        <Flex>
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
        </Flex>
      </Box>
    </Card>
  );
};

export default BottomCard;
