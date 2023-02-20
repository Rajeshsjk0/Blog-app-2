import React, { CSSProperties } from "react";
import { Card, Flex, Tag, Box, Heading, Image } from "@chakra-ui/react";
import UserInfo from "./UserInfoContainer/UserInfo";

interface ChildComponentProps {
  style: CSSProperties;
  newsImage: string;
  userName: string;
  image: string;
  date: string;
}

const FullLengthImage: React.FC<ChildComponentProps> = (props) => {
  const { newsImage, userName, image, date } = props;

  return (
    <Card
      display={"flex"}
      flexDirection={"column"}
      bg={`url(${newsImage})`}
      bgSize="cover"
      bgRepeat="no-repeat"
      // backgroundColor="transparent"
      w={"23.57%"}
      // h={"500px"}
      borderRadius={24}
    >
      <Card
        direction="column"
        mt="213px"
        ml="12px"
        mr="12px"
        mb={"12px"}
        padding={3}
        borderRadius={"25px"}
      >
        <Box paddingBottom={"14px"}>
          <Tag borderRadius={"10px"} fontSize="12px" colorScheme="green">
            Tech
          </Tag>
        </Box>
        <Heading
          fontSize="16px"
          color="#1F2937"
          fontWeight={600}
          lineHeight={"24px"}
          paddingBottom={"12px"}
        >
          My Google Interview Experience (UX Design)
        </Heading>
        <UserInfo style={{}} image={image} userName={userName} date={date} />
      </Card>
    </Card>
  );
};

export default FullLengthImage;
