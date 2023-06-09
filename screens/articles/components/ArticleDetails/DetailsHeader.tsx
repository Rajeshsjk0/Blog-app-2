import {
  Avatar,
  Flex,
  Heading,
  VStack,
  HStack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Divider,
  Image,
  Container,
  Center,
  SimpleGrid,
  Hide,
} from "@chakra-ui/react";
import { Heart16Regular, Comment16Regular, Comment24Regular, Heart24Regular } from "@fluentui/react-icons";

export default function DetailsHeader() {
  return (
    <VStack spacing={{base : 5, md:18}}>
      <HStack spacing={5} margin={5}>
        <Avatar
          padding={"0PX"}
          name={"userName"}
          src={"https://bit.ly/dan-abramov"}
        />
        <Flex paddingLeft="8px" justifyContent={"center"}>
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

      <Center width={{ base: "90%", md: "70%" }}>
        <Heading
          fontSize={{base :"24px" , md: "40px"}}
          color={"heading"}
          fontWeight="500"
          paddingBottom={"4px"}
          textAlign="center"
        >
          {"Julio Urías does it all as Dodgers sweep in San Francisco"}
        </Heading>
      </Center>

      <SimpleGrid
        width={{ base: "90%", md: "50%"  }}
        columns={{ base: 3, sm: 3, md: 5, lg: 5 }}
        justifyContent={"space-between"}
        gap="3"
        w="full"
      >
        <HStack w="full">
          <Tag borderRadius={"10px"} fontSize="12px">
            <TagLeftIcon boxSize="18px" as={Heart16Regular} />
            <TagLabel>223</TagLabel>
          </Tag>
          <Tag borderRadius={"10px"} fontSize="12px">
            <TagLeftIcon boxSize="18px" as={Comment16Regular} />
            <TagLabel>112</TagLabel>
          </Tag>
        </HStack>
        <Hide below="sm">
          <Center height="30px">
            <Divider orientation="vertical" />
          </Center>
        </Hide>
        <HStack>
          <Tag  borderRadius={"10px"}>
            <Heart24Regular />
          </Tag>
          <Tag  borderRadius={"10px"}>
            <Comment24Regular />
          </Tag>
          <Tag  borderRadius={"10px"}>
            <Heart24Regular />
          </Tag>
          <Tag  borderRadius={"10px"}>
            <Comment24Regular />
          </Tag>
        </HStack>
        <Hide below="sm">
          <Center height="30px">
            <Divider orientation="vertical" />
          </Center>
        </Hide>
        <HStack>
          <Tag borderRadius={"10px"} fontSize="12px">
            <TagLeftIcon boxSize="18px" as={Heart16Regular} />
            <TagLabel>223</TagLabel>
          </Tag>
          <Tag borderRadius={"10px"} fontSize="12px">
            <TagLeftIcon boxSize="18px" as={Comment16Regular} />
            <TagLabel>112</TagLabel>
          </Tag>
        </HStack>
      </SimpleGrid>

      <Image
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        alt="Hero Section"
        width="100%"
      />
    </VStack>
  );
}
