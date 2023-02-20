import React from "react";
import { Card, Flex, Badge, Box, Heading, Image } from "@chakra-ui/react";
import MetaInfoIcon from "./MetaInfoIcon/IconInfoContinaer";
import UserInfo from "./UserInfoContainer/UserInfo";

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
          <UserInfo
            style={{}}
            image="https://bit.ly/dan-abramov"
            userName="Joinh Davide"
            date="May 20, 2021 · 3 min read"
          />
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
