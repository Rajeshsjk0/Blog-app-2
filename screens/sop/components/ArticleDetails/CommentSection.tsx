import CommentInput from "@/components/shared/Article/CommentInput";
import Comment from "@/components/shared/Article/CommentCard";

import { VStack, Button } from "@chakra-ui/react";

export default function CommentSection() {
  return (
    <VStack spacing={5}>
      <CommentInput title={"Responses (3)"} placeholder={"Add to discussion"} />
      {comments.map((comment) => {
        return (
          <Comment
            comment={{
              content: comment.content,
              userInfo: comment.userInfo,
              likes: comment.likes,
              replies: comment.replies,
            }}
          />
        );
      })}
      <Button w="full" bg={"brand"} colorScheme="brand" borderRadius={50}>
        View full comments (+117 comments)
      </Button>
    </VStack>
  );
}

const userInfo = {
  title: "John Doe",
  image: "https://s3.envato.com/files/295374879/IMG_9449.jpg",
  date: "2023-02-24",
};

const reply = {
  content:
    "There’s no stopping the tech giant. Apple now opens its 100th store in China.There’s no stopping the tech giant.",
  userInfo: userInfo,
  likes: 5,
};

const replies = [
  {
    content:
      "There’s no stopping the tech giant. Apple now opens its 100th store in China.There’s no stopping the tech giant.",
    userInfo: userInfo,
    replies: [reply],
    likes: 5,
  },
];

const comments = [
  {
    content:
      "There’s no stopping the tech giant. Apple now opens its 100th store in China.There’s no stopping the tech giant.",
    userInfo: userInfo,
    likes: 3,
  },
  {
    content:
      "There’s no stopping the tech giant. Apple now opens its 100th store in China.There’s no stopping the tech giant.",
    userInfo: userInfo,
    likes: 2,
  },
  {
    content:
      "There’s no stopping the tech giant. Apple now opens its 100th store in China.There’s no stopping the tech giant.",
    userInfo: userInfo,
    likes: 7,
  },
  {
    content:
      "There’s no stopping the tech giant. Apple now opens its 100th store in China.There’s no stopping the tech giant.",
    userInfo: userInfo,
    likes: 1,
  },
  {
    content:
      "There’s no stopping the tech giant. Apple now opens its 100th store in China.There’s no stopping the tech giant.",
    userInfo: userInfo,
    replies: replies,
    likes: 10,
  },
];
