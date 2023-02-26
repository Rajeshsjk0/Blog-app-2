import React, { CSSProperties } from "react";
import { Card, Tag, Box, Heading, Image } from "@chakra-ui/react";
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
      backgroundImage={image}
      padding={3}
      borderRadius={"25px"}
      h={"391.91px"}
      margin={"0 10px"}
    >
      <Card margin={1} marginTop={213} borderRadius={"24px"} bg={"white"}>
        <Box mt={4} ml={3}>
          <Tag borderRadius={"10px"} fontSize="12px" colorScheme="green">
            Tech
          </Tag>
        </Box>
        <Heading
          fontSize="16px"
          color="blueBack"
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

{
  /* <Box paddingBottom={"14px"}>
<Tag borderRadius={"10px"} fontSize="12px" colorScheme="green">
  Tech
</Tag>
</Box>
<Heading
fontSize="16px"
color="blueBack"
fontWeight={600}
lineHeight={"24px"}
paddingBottom={"12px"}
>
My Google Interview Experience (UX Design)
</Heading>
<UserInfo style={{}} image={image} userName={userName} date={date} /> */
}
