import Image from "next/image";
import { Box, Center, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  InputRightElement,
} from "@chakra-ui/react";
import { ArrowRight16Regular, Search16Regular } from "@fluentui/react-icons";
import Link from "next/link";

export default function ArticleHeader() {
  return (
    <Center padding={5}>
      <Image
        src={require("@/assets/bg.png")}
        alt={""}
        style={{ borderRadius: "45px" }}
      />
      <Center
        bg="white"
        w={"90%"}
        padding={10}
        pos="absolute"
        // top={100}
        marginTop={400}
        borderRadius="45"
        shadow={"2xl"}
      >
        <VStack w="60%" spacing={6}>
          <VStack spacing={5}>
            <Heading>UI Design</Heading>
            <Text>We found 1135 results for UI Design</Text>
          </VStack>

          <Box w="100%" marginTop={10}>
            <InputGroup>
              <Input borderRadius="45px" pr="4.5rem" placeholder="Search" />
              <InputLeftElement
                pointerEvents="none"
                children={<Search16Regular color="gray.300" />}
              />
              <InputRightElement
                children={
                  <Button
                    borderRadius="45px"
                    colorScheme={"brand"}
                    bg="brand"
                    rightIcon={<ArrowRight16Regular />}
                    position="absolute"
                    top="50%"
                    transform="translateY(-50%)"
                    right="0"
                    p="2"
                    mr="-3rem"
                  />
                }
              />
            </InputGroup>
          </Box>
          <HStack spacing={5} alignItems="flex-start" w="full">
            <Text>Related:</Text>
            <Link href={""}>
              <Text color="brand">photo</Text>
            </Link>
            <Link href={""}>
              <Text color="brand">vector</Text>
            </Link>
          </HStack>
        </VStack>
      </Center>
    </Center>
  );
}