import {
  Avatar,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Heart16Regular, ReplayRegular } from "@fluentui/react-icons";
import React from "react";

interface userInfoProps {
  title: string;
  image: string;
  date: string;
}

interface ChildComponentProps {
  replies?: Array<ChildComponentProps>;
  likes: number;
  comment: string;
  userInfo: userInfoProps;
}

const Comment = (props: any) => {
  const { comment } = props;

  const UserInfoComponent = ({userInfo}: any) => {
    return (
      <Flex
        direction={"row"}
        gap="2"
        alignItems={"flex-start"}
        padding={2}
      >
        <Avatar
          padding={"0PX"}
          src={userInfo?.image}
          w={7}
          h={7}
          borderRadius={100}
        />
      </Flex>
    );
  };

  const CommentCard = ({ comment }: any) => {
    return (
      <Flex
        direction={"column"}
        borderRadius={5}
        borderColor="tagBorder"
        borderWidth={1}
        padding={4}
        gap={4}
        w="full"
      >
        <Flex gap={2}>
          <Heading
            fontSize="14px"
            color={"heading"}
            fontWeight="500"
            paddingBottom={"4px"}
          >
            {comment?.userInfo?.title}
          </Heading>
          <Text fontSize="12px" color="subHeading">
            {comment?.userInfo?.date}
          </Text>
        </Flex>
        <Text color={"smallText"}>{comment?.content}</Text>
        <ButtonGroup>
          <Button size="xs" borderRadius={50}>
            <Heart16Regular /> {comment?.likes} likes
          </Button>
          <Button size="xs" borderRadius={50}>
            <ReplayRegular /> Reply
          </Button>
        </ButtonGroup>
        {comment?.replies?.length > 0
          ? comment?.replies?.map((c : any, i:number) => {
              return <Comment key={i} comment={c} />;
            })
          : ""}
      </Flex>
    );
  };
  return (
    <Flex  w="full">
      <UserInfoComponent userInfo={comment?.userInfo} />
      <CommentCard comment={comment} />
    </Flex>
  );
};

export default Comment;
