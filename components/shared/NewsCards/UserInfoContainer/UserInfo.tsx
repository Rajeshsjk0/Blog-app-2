import { Avatar, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

interface ChildComponentProps {
  userName: string;
  image: string;
  date: string;
  style: React.CSSProperties;
}

const UserInfo: React.FC<ChildComponentProps> = (props) => {
  const { image, userName, date, style } = props;
  return (
    <Flex paddingBottom={"12px"}>
      <Avatar padding={"0PX"} name={userName} src={image} />
      <Flex direction={"column"} paddingLeft="8px" justifyContent={"center"}>
        <Heading
          fontSize="14px"
          color={"heading"}
          fontWeight="500"
          paddingBottom={"4px"}
        >
          {userName}
        </Heading>
        <Text fontSize="12px" color="subHeading">
          {date}
        </Text>
      </Flex>
    </Flex>
  );
};

export default UserInfo;
