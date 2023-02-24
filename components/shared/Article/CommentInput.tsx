import { Flex, Heading, Textarea, ButtonGroup, Button } from "@chakra-ui/react";
import React from "react";

interface ChildComponentProps {
  title: string;
  placeholder: string;
}

const commentInput: React.FC<ChildComponentProps> = (props) => {
  const { title, placeholder } = props;
  return (
    <Flex paddingBottom={"12px"} w="full" h="full" gap={4} direction="column">
      <Heading fontSize="18px" color={"heading"} fontWeight="700">
        {title}
      </Heading>
      <Textarea placeholder={placeholder} />
      <ButtonGroup>
        <Button borderRadius={24} bg="brand" colorScheme={"brand"}>
          Submit
        </Button>
        <Button borderRadius={24}>Cancel</Button>
      </ButtonGroup>
    </Flex>
  );
};

export default commentInput;
