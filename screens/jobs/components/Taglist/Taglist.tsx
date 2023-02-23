import {
  Box,
  Tag,
  TagCloseButton,
  TagLabel,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { ChevronDownRegular } from "@fluentui/react-icons";
import React from "react";

const Taglist = () => {
  const tags = [
    "Aliquet neque",
    "Habitasse",
    "Morbi cras",
    "Sapien sed",
    "Urna metus",
    "Scelerisque et",
    "Scelerisque et",
    "Tellus commodo",
    "Lobortis urna",
    "Commodo",
    "Varius donec",
    "In libero",
    "Feugiat pretium",
    "Feugiat",
  ];
  return (
    <Box
      maxW="full"
      ml={{ sm: "50px", md: "297px" }}
      mr={{ sm: "50px", md: "297px" }}
      pt={20}
    >
      <Wrap>
        {tags.map((tag) => {
          return (
            <WrapItem>
              <Tag size="sm" mr="2" mb="2" bg="white" color="paragraphs">
                <TagLabel
                  fontFamily={"smallFont"}
                  fontSize={"0.875rem"}
                  lineHeight="20px"
                >
                  {tag}
                </TagLabel>
              </Tag>
            </WrapItem>
          );
        })}
        <WrapItem>
          <Tag size="sm" mr="2" mb="2" bg="white" color="paragraphs">
            <TagLabel
              fontFamily={"smallFont"}
              fontSize={"0.875rem"}
              lineHeight="20px"
            >
              Most Recent
            </TagLabel>
            <TagCloseButton>
              <ChevronDownRegular />
            </TagCloseButton>
          </Tag>
        </WrapItem>
      </Wrap>
    </Box>
  );
};

export default Taglist;
