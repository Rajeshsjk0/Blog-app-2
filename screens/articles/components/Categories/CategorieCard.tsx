import { Image, Box, Card, Flex, Center } from "@chakra-ui/react";

type Props = {
  content: {
    heading: string;
    items: string;
    image: string;
  };
  keyId: number;
};

const CategoryCard = ({ content, keyId }: Props) => {
  return (
    <Card
      borderRadius={"24px"}
      key={keyId}
      justifyContent={"center"}
      alignItems={"Center"}
      paddingY="5"
    >
      <Center w={"full"}>
        <Image
          w={100}
          h={100}
          src={content.image}
          alt="Category"
          borderRadius={50}
        />
      </Center>
      <Box>
        <Flex
          justifyContent={"center"}
          fontWeight="600"
          fontSize="18px"
          color="heading"
          marginTop={3}
        >
          {content.heading}
        </Flex>
        <Flex
          w={"100%"}
          justifyContent={"center"}
          alignItems={"Center"}
          fontWeight="400"
          fontSize="14px"
          color="subHeading"
        >
          {content.items} articles
        </Flex>
      </Box>
    </Card>
  );
};

export default CategoryCard;
