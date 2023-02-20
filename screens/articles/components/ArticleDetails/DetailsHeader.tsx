import UserInfo from "@/components/shared/NewsCards/UserInfoContainer/UserInfo";
import {
  Avatar,
  Center,
  Flex,
  Heading,
  Text,
  Box,
  VStack,
  HStack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Divider,
  Image,
  Container,
} from "@chakra-ui/react";
import {
  Heart16Regular,
  Comment16Regular,
  Bookmark28Regular,
} from "@fluentui/react-icons";

export default function DetailsHeader() {
  return (
    <VStack spacing={5}>
      <HStack spacing={5}>
        <Avatar
          padding={"0PX"}
          name={"userName"}
          src={"https://bit.ly/dan-abramov"}
        />
        <Flex direction={"row"} paddingLeft="8px" justifyContent={"center"}>
          <Heading
            fontSize="16px"
            color={"#374151"}
            fontWeight="500"
            paddingBottom={"4px"}
          >
            {"Joinh Davide    May 20, 2021  ·  3 min read"}
          </Heading>
        </Flex>
      </HStack>

      <Heading
        fontSize="24px"
        color={"#374151"}
        fontWeight="500"
        paddingBottom={"4px"}
      >
        {"Julio Urías does it all as Dodgers sweep in San Francisco"}
      </Heading>
      <HStack justifyContent={"space-between"}>
        <HStack>
          <Tag borderRadius={"10px"} fontSize="10px">
            <TagLeftIcon boxSize="12px" as={Heart16Regular} />
            <TagLabel>223</TagLabel>
          </Tag>
          <Tag borderRadius={"10px"} fontSize="10px">
            <TagLeftIcon boxSize="12px" as={Comment16Regular} />
            <TagLabel>112</TagLabel>
          </Tag>
        </HStack>
        <Divider dir="vertical" w="1" />
        <HStack>
          <Tag borderRadius={"10px"}>
            <Heart16Regular />
          </Tag>
          <Tag borderRadius={"10px"}>
            <Comment16Regular />
          </Tag>
          <Tag borderRadius={"10px"}>
            <Heart16Regular />
          </Tag>
          <Tag borderRadius={"10px"}>
            <Comment16Regular />
          </Tag>
        </HStack>
        <Divider dir="vertical" w="1" />
        <HStack>
          <Tag borderRadius={"10px"} fontSize="10px">
            <TagLeftIcon boxSize="12px" as={Heart16Regular} />
            <TagLabel>223</TagLabel>
          </Tag>
          <Tag borderRadius={"10px"} fontSize="10px">
            <TagLeftIcon boxSize="12px" as={Comment16Regular} />
            <TagLabel>112</TagLabel>
          </Tag>
        </HStack>
      </HStack>
      <Image
        src="https://thumbs.dreamstime.com/b/man-silhouette-stand-alone-beach-watching-romantic-colorful-sunset-73828239.jpg"
        alt="Hero Section"
        width="100%"
      />
    </VStack>
  );
}
