import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Hide,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Show,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ArrowRight16Regular, Search16Regular } from "@fluentui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default function ArticleSearch() {
  return (
    <Flex padding={5}>
      <Flex
        direction={"column"}
        justifyContent="center"
        height="full"
        alignItems={"center"}
      >
        <Hide below="md">
          <Image
            src={require("@/assets/bg.png")}
            alt={""}
            style={{ borderRadius: "45px" }}
          />
        </Hide>
        <Center
          bg="white"
          w={{ sm: "90%", md: "90%" }}
          padding={10}
          borderRadius="45"
          shadow={"2xl"}
          marginTop={{ sm: 0, md: -150 }}
        >
          <VStack spacing={6} w="full">
            <VStack spacing={5}>
              <Heading>UI Design</Heading>
              <Text>We found 1135 results for UI Design</Text>
            </VStack>

            <Center flexDir={"column"} marginTop={10} w="80%" gap={6}>
              <InputGroup>
                <Input
                  w="full"
                  borderRadius="45px"
                  pr="4.5rem"
                  placeholder="Search"
                />
                <InputLeftElement pointerEvents="none">
                  <Search16Regular color="gray.300" />
                </InputLeftElement>
                <InputRightElement>
                  <Button
                    size={"sm"}
                    borderRadius="45"
                    colorScheme={"brand"}
                    bg="brand"
                    rightIcon={<ArrowRight16Regular />}
                    right="1"
                  />
                </InputRightElement>
              </InputGroup>
              <HStack spacing={5} alignItems="flex-start" w="full">
                <Text>Related:</Text>
                <Link href={""}>
                  <Text color="brand">photo</Text>
                </Link>
                <Link href={""}>
                  <Text color="brand">vector</Text>
                </Link>
              </HStack>
            </Center>
          </VStack>
        </Center>
      </Flex>
    </Flex>
  );
}
