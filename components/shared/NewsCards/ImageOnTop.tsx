import React from "react";
import { Card, Flex, Badge, Box, Heading, Image } from "@chakra-ui/react";
import UserInfo from "./UserInfoContainer/UserInfo";

const ImageOnTop = () => {
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
          <UserInfo
            style={{}}
            image="https://bit.ly/dan-abramov"
            userName="Joinh Davide"
            date="May 20, 2021 · 3 min read"
          />
        </Flex>
      </Box>
    </Card>
  );
};

export default ImageOnTop;
