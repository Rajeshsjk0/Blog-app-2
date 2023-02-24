import React from "react";
import { Card, Box, Heading, Image, HStack } from "@chakra-ui/react";
import UserInfo from "@/components/shared/NewsCards/UserInfoContainer/UserInfo";
import { Tag, TagLabel, TagLeftIcon } from "@chakra-ui/react";
import {
  Bookmark16Regular,
  Comment24Regular,
  Heart24Regular,
} from "@fluentui/react-icons";
import { useRouter } from "next/router";

interface userInfoProps {
    username : string;
    image : string;
    date : string
}

interface ArticleComponentProps {
  id: number;
  image : string;
  userInfo : userInfoProps;
  heading : string;
  likes : string;
  comments : string;
}

const ArticleCard = ({
  id,
  image,
  userInfo,
  heading,
  likes,
  comments,
}: ArticleComponentProps) => {
  const router = useRouter();

  const handleClickArticle = (id: number) => {
    router.push(`/articles/${id}`);
  };

  return (
    <Card
      borderRadius={24}
      onClick={() => handleClickArticle(id + 1)}
      cursor="pointer"
    >
      <Image
        src={image}
        alt="Hero Section"
        width="100%"
        height={"160px"}
        borderTopRadius={24}
      />
      <Box padding={"12px"}>
        <UserInfo
          image={userInfo?.image}
          userName={userInfo?.username}
          date={userInfo?.date}
        />
        <Heading
          fontSize="14px"
          fontWeight={600}
          lineHeight={"24px"}
          paddingBottom={"10px"}
          color="heading"
        >
          {heading}
        </Heading>

        <HStack justifyContent={"space-between"}>
          <HStack>
            <Tag borderRadius={"10px"}>
              <TagLeftIcon as={Heart24Regular} />
              <TagLabel>{likes}</TagLabel>
            </Tag>
            <Tag borderRadius={"10px"}>
              <TagLeftIcon as={Comment24Regular} />
              <TagLabel>{comments}</TagLabel>
            </Tag>
          </HStack>
          <Tag borderRadius={"10px"}>
            <Bookmark16Regular />
          </Tag>
        </HStack>
      </Box>
    </Card>
  );
};

export default ArticleCard;
