import {
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Tag,
  Text,
} from "@chakra-ui/react";
import { Search16Regular, ArrowRight16Regular } from "@fluentui/react-icons";
import Image from "next/image";
export default function Subscribe() {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={4}>
      <GridItem colSpan={{ base: 5, md: 2, lg: 2 }} height="full">
        <Flex
          flexDir={"column"}
          gap="3"
          w="full"
          h="full"
          padding={{  base: 5, md: 10, }}
          justifyContent="center"
        >
          <Heading>Join our newsletter 🎉</Heading>
          <Text>
            Read and share new perspectives on just about any topic. Everyone’s
            welcome.👋
          </Text>
          <HStack justify={"flex-start"} w="80%">
            <Tag>01</Tag>
            <Text>Get more discount</Text>
          </HStack>
          <HStack justify={"flex-start"} w="80%">
            <Tag>02</Tag>
            <Text>Get premium magazines</Text>
          </HStack>
          <Center flexDir={"column"} marginTop={10} w="80%" gap={6}>
            <InputGroup>
              <Input
                w="full"
                borderRadius="45px"
                pr="4.5rem"
                placeholder="Enter your Email"
              />
              <InputLeftElement
                pointerEvents="none"
                children={<Search16Regular color="gray.300" />}
              />
              <InputRightElement
                children={
                  <Button
                    size={"sm"}
                    borderRadius="45"
                    colorScheme={"brand"}
                    bg="brand"
                    rightIcon={<ArrowRight16Regular />}
                    right="1"
                  />
                }
              />
            </InputGroup>
          </Center>
        </Flex>
        <HStack></HStack>
      </GridItem>
      <GridItem colSpan={{ base: 5, md: 3, lg: 3 }}>
        <Center padding={{ md: 10, sm: 5 }}>
          <Image
            src={require("@/assets/newsletter.png")}
            alt="Hero Section"
            // width={"full"}
          />
        </Center>
      </GridItem>
    </Grid>
  );
}
