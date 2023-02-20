import React, { useState } from "react";
import {
  Card,
  Flex,
  Box,
  Heading,
  Image,
  HStack,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import UserInfo from "@/components/shared/NewsCards/UserInfoContainer/UserInfo";
import { Grid, GridItem } from "@chakra-ui/react";
import { Tag, TagLabel, TagLeftIcon } from "@chakra-ui/react";
import {
  Bookmark28Regular,
  Comment16Regular,
  Heart16Regular,
} from "@fluentui/react-icons";
import TablePagination from "@/components/shared/TablePagination";
import { ButtonGroup } from "@chakra-ui/react";
import { useRouter } from "next/router";

const ArticleTab = () => {
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  const router = useRouter();

  const handleClickArticle = (id: number) => {
    router.push(`/articles/${id}`);
  };

  return (
    <>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4, lg: 4 }} gap={5}>
        {Array(10)
          //@ts-ignore
          .fill()
          .map((_, i) => (
            <GridItem
              w="100%"
              onClick={() => handleClickArticle(i+1)}
              cursor="pointer"
            >
              <Card key={i} borderRadius={24}>
                <Image
                  src="https://thumbs.dreamstime.com/b/man-silhouette-stand-alone-beach-watching-romantic-colorful-sunset-73828239.jpg"
                  alt="Hero Section"
                  width="100%"
                  height={"160px"}
                  borderTopRadius={24}
                />
                <Box padding={"12px"}>
                  <Flex>
                    <UserInfo
                      style={{}}
                      image="https://bit.ly/dan-abramov"
                      userName="Joinh Davide"
                      date="May 20, 2021 · 3 min read"
                    />
                  </Flex>
                  <Heading
                    width={"72%"}
                    fontSize="14px"
                    color="#111827"
                    fontWeight={600}
                    lineHeight={"24px"}
                    paddingBottom={"10px"}
                  >
                    My Google Interview Experience (UX Design)
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
                    <Tag borderRadius={"10px"}>
                      <TagLeftIcon boxSize="12px" as={Bookmark28Regular} />
                    </Tag>
                  </HStack>
                </Box>
              </Card>
            </GridItem>
          ))}
      </SimpleGrid>
      <HStack marginTop={10} justifyContent="space-between">
        <HStack>
          <ButtonGroup spacing="2">
            <Button size="sm" colorScheme="brand" bg="brand">
              1
            </Button>
            <Button size="sm">2</Button>
            <Button size="sm">3</Button>
            <Button size="sm">3</Button>
          </ButtonGroup>
        </HStack>
        <Button colorScheme="brand" bg="brand" size="sm" onClick={handleToggle}>
          Show {show ? "Less" : "More"}
        </Button>
      </HStack>
    </>
  );
};

export default ArticleTab;
