import {
  Button,
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
    <VStack
      ml={{ sm: "50px", md: "297px" }}
      mr={{ sm: "50px", md: "297px" }}
      alignItems="flex-start"
    >
      <InputGroup>
        <Input w="full" borderRadius="45px" pr="4.5rem" placeholder="Job" />
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
      <Text color={"smallText"}>
        We found 1135 results articles for "Ui Design"
      </Text>
    </VStack>
  );
};

export default Search;
