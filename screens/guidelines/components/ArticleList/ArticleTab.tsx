import React from "react";
import {
  HStack,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import { GridItem } from "@chakra-ui/react";
import { ButtonGroup } from "@chakra-ui/react";
import { useRouter } from "next/router";
import ArticleCard from "@/components/shared/Article/ArticleCard";

const ArticleTab = () => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  const router = useRouter();

  const handleClickArticle = (id: number) => {
    router.push(`/articles/${id}`);
  };

  return (
    <>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        gap={7}
        marginTop={5}
      >
        {Array(10)
          //@ts-ignore
          .fill()
          .map((_, i) => (
            <GridItem
              w="100%"
              onClick={() => handleClickArticle(i + 1)}
              cursor="pointer"
            >
              <ArticleCard
                id={i}
                image={
                  "https://thumbs.dreamstime.com/b/man-silhouette-stand-alone-beach-watching-romantic-colorful-sunset-73828239.jpg"
                }
                userInfo={{
                  username: "Niamh O'Shea",
                  date: "May 12 2020",
                  image:
                    "https://thumbs.dreamstime.com/b/man-silhouette-stand-alone-beach-watching-romantic-colorful-sunset-73828239.jpg",
                }}
                heading={"My Google Interview Experience (UX Design)"}
                likes={"223"}
                comments={"112"}
              />
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
