import UserInfo from "@/components/shared/NewsCards/UserInfoContainer/UserInfo";
import {
  Text,
  Box,
  HStack,
  Tag,
  TagLabel,
  Wrap,
  VStack,
} from "@chakra-ui/react";
import TrendingTopic from "@/components/shared/Article/TrendingTopic";
import PopularPost from "@/components/shared/Article/PopularPost";

const TagContent = () => {
  return (
    <Box bg="#F9FAFB" p="4">
      <HStack justifyContent={"space-between"}>
        <Text fontWeight="semibold">🏷 Discover more tags</Text>
        <Text
          cursor={"pointer"}
          color={"brand"}
          fontWeight="semibold"
          fontSize={"sm"}
        >
          View all
        </Text>
      </HStack>
      <Wrap mt={5} spacing={2}>
        {Array(10)
          //@ts-ignore
          .fill()
          .map((_, i) => (
            <Tag key={i}>
              <TagLabel fontWeight={"regular"}>Aliquet</TagLabel>
            </Tag>
          ))}
      </Wrap>
    </Box>
  );
};

const TrendingTopics = () => {
  return (
    <Box bg="#F9FAFB" p="4" w="full">
      <HStack justifyContent={"space-between"}>
        <Text fontWeight="semibold">✨ Trending topic</Text>
        <Text
          cursor={"pointer"}
          color={"brand"}
          fontWeight="semibold"
          fontSize={"sm"}
        >
          View all
        </Text>
      </HStack>
      <Wrap mt={5} spacing={2}>
        {Array(4)
          //@ts-ignore
          .fill()
          .map((_, i) => (
            <TrendingTopic
              title={"Life Styles"}
              image={
                "https://thumbs.dreamstime.com/b/man-silhouette-stand-alone-beach-watching-romantic-colorful-sunset-73828239.jpg"
              }
              subTitle={"19 Articles"}
            />
          ))}
      </Wrap>
    </Box>
  );
};



const AuthorsComponent = () => {
  return (
    <Box bg="#F9FAFB" p="4">
      <HStack justifyContent={"space-between"}>
        <Text fontWeight="semibold">🏷 Discover Authors</Text>
        <Text
          cursor={"pointer"}
          color={"brand"}
          fontWeight="semibold"
          fontSize={"sm"}
        >
          View all
        </Text>
      </HStack>
      <Wrap mt={5} spacing={2}>
        {Array(4)
          //@ts-ignore
          .fill()
          .map((_, i) => (
            <UserInfo
              userName={"Niamh O'Shea"}
              image={
                "https://thumbs.dreamstime.com/b/man-silhouette-stand-alone-beach-watching-romantic-colorful-sunset-73828239.jpg"
              }
              style={{}}
              date={"Author Job Descriptions"}
            />
          ))}
      </Wrap>
    </Box>
  );
};

const PopularPosts = () => {
  return (
    <Box bg="#F9FAFB" p="4">
      <HStack justifyContent={"space-between"}>
        <Text fontWeight="semibold">🎯 Popular Posts</Text>
        <Text
          cursor={"pointer"}
          color={"brand"}
          fontWeight="semibold"
          fontSize={"sm"}
        >
          View all
        </Text>
      </HStack>
      <Wrap mt={5} spacing={2}>
        {Array(4)
          //@ts-ignore
          .fill()
          .map((_, i) => (
            <PopularPost
              userInfo={{title :"Niamh O'Shea", subTitle :"13 Dec 1998" , image :  "https://thumbs.dreamstime.com/b/man-silhouette-stand-alone-beach-watching-romantic-colorful-sunset-73828239.jpg" }}
              image={
                "https://thumbs.dreamstime.com/b/man-silhouette-stand-alone-beach-watching-romantic-colorful-sunset-73828239.jpg"
              }
              postTitle={"Helping a local business reinvent itself"}
            />
          ))}
      </Wrap>
    </Box>
  );
};

export default function ReletedSuggestions() {
  return (
    <VStack spacing={5}>
      <TagContent />
      <TrendingTopics />
      <AuthorsComponent />
      <PopularPosts />
    </VStack>
  );
}
