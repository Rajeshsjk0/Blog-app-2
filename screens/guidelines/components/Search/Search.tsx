import {
  Button,
  Center,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ArrowRight16Regular, Search16Regular } from "@fluentui/react-icons";
import React from "react";

const Search = () => {
  return (
    <Center
      flexDirection={"column"}
      ml={{ base: "10px", sm: "50px", md: "100px", lg: "297px" }}
      mr={{ base: "10px", sm: "50px", md: "100px", lg: "297px" }}
      w={{ base: "90%", sm: "90%", md: "60%" }}
      mt={-5}
      zIndex={100}
      bg="white"
      pos="absolute"
      alignItems="flex-start"
      justifyContent={"center"}
      borderRadius="45px"
    >
      <InputGroup>
        <Input w="full" borderRadius="45px" pr="4.5rem" placeholder="Guideline" />
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
      <Text color={"smallText"} p={5}>
        We found 1135 results articles for "Ui Design"
      </Text>
    </Center>
  );
};

export default Search;
