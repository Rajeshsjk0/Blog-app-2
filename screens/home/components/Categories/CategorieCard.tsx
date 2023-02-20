import { Avatar, Box, Card, Flex } from "@chakra-ui/react";

type Props = {
  width: string;
  imageHeight: string;

  content: {
    heading: string;
    items: string;
    image: string;
  };
  keyId: number;
};

const CategoryCard = ({ width, content, keyId, imageHeight }: Props) => {
  return (
    <Card
      w={width}
      h="190px"
      borderRadius={"24px"}
      border={"1px solid #E5E7EB"}
      backgroundColor={"#FFFFFF"}
      key={keyId}
      display={"flex"}
      flexDirection="column"
      justifyContent={"center"}
      alignItems={"Center"}
      paddingTop="24px"
      paddingBottom="24px"
    >
      <Box h={imageHeight} w="33.81%">
        <Avatar
          w={"100%"}
          h="100%"
          src={content.image}
          name="Category"
          borderRadius="50%"
        />
      </Box>
      <Box
        w={"84.5%"}
        flexDirection="column"
        justifyContent={"center"}
        alignItems={"Center"}
      >
        <Flex
          w={"100%"}
          flexDirection="column"
          justifyContent={"center"}
          alignItems={"Center"}
          fontStyle="normal"
          fontWeight="600"
          fontSize="18px"
          lineHeight={"28px"}
          color="#1F2937"
          marginTop={3}
        >
          {content.heading}
        </Flex>
        <Flex
          w={"100%"}
          flexDirection="column"
          justifyContent={"center"}
          alignItems={"Center"}
          fontStyle="normal"
          fontFamily={"Poppins"}
          fontWeight="400"
          fontSize="14px"
          lineHeight={"20px"}
          color="#6B7280"
        >
          {content.items} articles
        </Flex>
      </Box>
    </Card>
  );
};

export default CategoryCard;
