import {
  Avatar,
  Flex,
  Heading,
  VStack,
  HStack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Image,
  Center,
  Text,
  Hide,
} from "@chakra-ui/react";
import {
  Heart16Regular,
  Comment16Regular,
  CalendarDay16Filled,
} from "@fluentui/react-icons";

export default function DetailsHeader() {
  return (
    <VStack spacing={{ base: 5, md: 18 }} alignItems="flex-start">
      <Flex
        direction={"column"}
        p={{ base: 5, md: 24 }}
        gap={3}
        bg="blueBack"
        borderRightRadius={[0,0,0,33,33,33]}
        color="tagText"
        w={{base :"auto",sm:"auto", xs:"auto", md:"auto", lg : "full", xl:"full"}}
      >
        <HStack spacing={5}>
          <CalendarDay16Filled />
          <Text
            fontSize="16px"
            fontWeight="500"
            paddingBottom={"4px"}
            color="tagText"
          >
            {"May 20, 2021"}
          </Text>
        </HStack>
        <Center width={{ base: "90%", md: "70%" }}>
          <Heading
            fontSize={{ base: "24px", md: "40px" }}
            color="tagText"
            fontWeight="500"
            paddingBottom={"4px"}
            textAlign="left"
          >
            {"Julio Urías does it all as Dodgers sweep in San Francisco"}
          </Heading>
        </Center>
        <HStack spacing={5}>
          <HStack>
            <Avatar
              padding={"0PX"}
              name={"userName"}
              src={"https://bit.ly/dan-abramov"}
            />
            <Flex paddingLeft="8px" justifyContent={"center"}>
              <Heading
                fontSize="16px"
                color="tagText"
                fontWeight="500"
                paddingBottom={"4px"}
              >
                {"Joinh Davide "}
              </Heading>
            </Flex>
          </HStack>
          <HStack spacing={1}>
            <CalendarDay16Filled />
            <Text
              fontSize="16px"
              color="tagText"
              fontWeight="500"
              paddingBottom={"4px"}
            >
              {"May 20, 2021"}
            </Text>
          </HStack>
        </HStack>
        <HStack
          width={{ base: "90%", md: "50%" }}
          justifyContent={"space-between"}
          gap="3"
          w="full"
          mt={5}
        >
          <HStack>
            <Tag bg="blueTag" color="tagText" borderRadius={"10px"} fontSize="12px">
              <TagLeftIcon boxSize="18px" as={Heart16Regular} />
              <TagLabel>223</TagLabel>
            </Tag>
            <Tag bg="blueTag" color="tagText" borderRadius={"10px"} fontSize="12px">
              <TagLeftIcon boxSize="18px" as={Comment16Regular} />
              <TagLabel>112</TagLabel>
            </Tag>
          </HStack>

          <HStack>
            <Tag bg="blueTag" color="tagText" borderRadius={"10px"}>
              <Heart16Regular />
            </Tag>
            <Tag bg="blueTag" color="tagText" borderRadius={"10px"}>
              <Comment16Regular />
            </Tag>
          </HStack>
        </HStack>
      </Flex>
      <Hide below="xl">
        <Image
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt="Hero Section"
          width="100%"
          pos={"absolute"}
          w="40%"
          left={{ sm: "60%", md: "60%", lg: "60%", xl : "60%" }}
          top={130}
          borderRadius={24}
        />
      </Hide>
    </VStack>
  );
}
