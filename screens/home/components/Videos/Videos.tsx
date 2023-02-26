import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Play12Regular } from "@fluentui/react-icons";
import React, { useState } from "react";

const Videos: React.FC = () => {
  const [SelectedVideo, setSelectedVideo] = useState(0);
  const imageArray: { image: string }[] = [
    {
      image:
        "data:image/jpeg;base64,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",
    },
    {
      image:
        "data:image/jpeg;base64,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",
    },
    {
      image:
        "data:image/jpeg;base64,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",
    },
    {
      image:
        "data:image/jpeg;base64,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",
    },
  ];

  const onClickHandler = (key: number) => {
    setSelectedVideo(key);
  };
  return (
    <Flex
      w={"100%"}
      direction={"column"}
      alignItems="flex-start"
      gap={"32px"}
      marginTop={{ base: "60px", md: "128px" }}
    >
      <Box w={"100%"}>
        <Heading
          w={"100%"}
          fontStyle="normal"
          fontFamily={"Poppins"}
          fontWeight="600"
          fontSize="36px"
          lineHeight={"40px"}
          color="#111827"
        >
          The Videos
        </Heading>
        <Text
          w={{ base: "full", lg: "40.36%" }}
          fontStyle="normal"
          fontFamily={"Poppins"}
          fontWeight="400"
          fontSize="18px"
          lineHeight={"28px"}
          color="#4B5563"
        >
          Read and share new perspectives on just about any topic. Everyone’s
          welcome.
        </Text>
      </Box>
      <Box
        w={"100%"}
        height={{ base: "500px", md: "689px" }}
        position="relative"
      >
        <Box
          position={"absolute"}
          top={{ base: "300px", md: "0px" }}
          right={{ md: "0" }}
          width={{ base: "full", md: "50%" }}
          backgroundColor={"rgba(199, 210, 254, 0.2)"}
          height={{ base: "20%", md: "100%" }}
          borderRadius={{ base: "20px", md: "50px" }}
          backdropFilter="blur(40px)"
        ></Box>
        <Box
          position={"absolute"}
          left={"0"}
          width={{ base: "full", md: "80.14%" }}
          //   backgroundColor={"Green"}
          top={{ base: 10, md: "53px" }}
          height={{ base: "300px", md: "585px" }}
          bg="lightcoral"
        >
          Selected Video is {SelectedVideo + 1}
        </Box>
        <Flex
          direction={{ base: "row", md: "column" }}
          alignItems="flex-end"
          position={"absolute"}
          p="0"
          gap={{ base: "10px", md: "20px" }}
          top={{ base: "350px", md: "53px" }}
          right={{ md: "4.70%" }}
          h={{ base: "auto", md: "585px" }}
          width={{ base: "auto", md: "12.71%" }}
        >
          {imageArray.map((imageObj, key) => {
            return (
              <Box
                key={key}
                w={{ base: "80%", md: "100%" }}
                h={{ base: "30%", lg: "22.5%" }}
                position={"relative"}
                onClick={() => onClickHandler(key)}
              >
                <Image
                  w={"100%"}
                  h="100%"
                  alt="video-content"
                  src={imageObj.image}
                />
                <Box
                  position="absolute"
                  w={"25%"}
                  h={"25%"}
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                >
                  <Box
                    w={"100%"}
                    h="100%"
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems="center"
                    backgroundColor={"#FFFFFF"}
                    borderRadius="30%"
                  >
                    <Box>
                      <Play12Regular color="#4B5563" />
                    </Box>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Flex>
      </Box>
    </Flex>
  );
};

export default Videos;
