import { Flex, Heading, Text, Image, VStack, Avatar } from "@chakra-ui/react";
import React from "react";

interface userInfoProps {
  title: string;
  image: string;
  subTitle: string;
}

interface ChildComponentProps {
  postTitle: string;
  image: string;
  userInfo: userInfoProps;
}

const PopularPost: React.FC<ChildComponentProps> = (props) => {
  const { postTitle, image, userInfo } = props;

  const UserInfoComponent = () => {
    return (
      <Flex direction={"row"} gap="2" alignItems={"center"}>
        <Avatar padding={"0PX"} src={image} w={7} h={7} borderRadius={100} />
        <Heading
          fontSize="14px"
          color={"heading"}
          fontWeight="500"
          paddingBottom={"4px"}
        >
          {userInfo.title}
        </Heading>
        <Text fontSize="12px" color="subHeading">
          {userInfo.subTitle}
        </Text>
      </Flex>
    );
  };

  return (
    <Flex
      flexDirection={"row"}
      paddingBottom={"12px"}
      direction={"row"}
      pb="7"
      w="full"
    >
      <Flex direction={"column"} w="full" alignItems={"flex-start"}>
        <UserInfoComponent />
        <Heading fontSize="18px" color={"heading"} fontWeight="500" pt="3">
          {postTitle}
        </Heading>
      </Flex>
      <Flex alignItems={"flex-start"}>
        <Image
          padding={"0PX"}
          src={image}
          h={"80px"}
          borderRadius={10}
          alt="image"
        />
      </Flex>
    </Flex>
  );
};

export default PopularPost;
