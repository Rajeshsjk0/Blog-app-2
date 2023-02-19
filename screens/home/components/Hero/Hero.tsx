import { CustomArrow, MetaInfoIcon } from "@/components";
import UserInfo from "@/components/shared/NewsCards/UserInfoContainer/UserInfo";
import { Badge, Box, Card, Flex, Heading, Image } from "@chakra-ui/react";
import React, { useRef } from "react";
import Slider from "react-slick";

var settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const Hero = () => {
  const sliderRef = useRef<Slider>(null);

  const next = () => {
    sliderRef.current?.slickNext();
  };

  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <Flex direction={"row"} w="100%">
      <Flex w={"100%"}>
        <Box width={"32%"} position="relative">
          <div>
            <Card
              width="120%"
              height="320px"
              borderRadius="24px"
              position="absolute"
              background="rgba(255, 255, 255, 0.7)"
              border="2px solid #FFFFFF"
              boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
              backdropFilter="blur(37px)"
              left={"0"}
              top="28px"
            >
              <Flex
                w={"100%"}
                direction="column"
                // border={"1px solid #E5E7EB"}
                borderRadius={"16px"}
              >
                <Box w={"100%"} marginTop="40px" pl="40px" paddingBottom="26px">
                  <Badge
                    borderRadius={"10px"}
                    fontSize="12px"
                    marginRight={"8px"}
                    padding="2px 10px"
                    colorScheme="red"
                  >
                    Travel
                  </Badge>
                  <Badge
                    borderRadius={"10px"}
                    fontSize="12px"
                    padding="2px 10px"
                    colorScheme="green"
                  >
                    Tech
                  </Badge>
                </Box>
                <Heading
                  fontSize="24px"
                  color={"#1F2937"}
                  fontFamily="Poppins"
                  fontWeight="500"
                  lineHeight={"32px"}
                  pl="40px"
                  pr="40px"
                  pb={"26px"}
                >
                  50 life changing motivational quotes for entrepreneurs
                </Heading>
                <Box pl={"40px"}>
                  <UserInfo
                    style={{}}
                    image="https://bit.ly/dan-abramov"
                    userName="Joinh Davide"
                    date="May 20, 2021 · 3 min read"
                  />
                </Box>
                <Box pl={"40px"}>
                  <MetaInfoIcon />
                </Box>
              </Flex>
            </Card>
          </div>
          <Flex
            justifyContent="center"
            position="absolute"
            bottom={"28px"}
            left={"30px"}
            alignItems={"center"}
            gap="11px"
          >
            <CustomArrow direction="left" onClick={previous} />
            <CustomArrow direction="right" onClick={next} />
          </Flex>
        </Box>
        <Box width={"68%"} h="470px">
          <Image
            src="https://thumbs.dreamstime.com/b/man-silhouette-stand-alone-beach-watching-romantic-colorful-sunset-73828239.jpg"
            alt="Hero Section"
            width="100%"
            height="100%"
            borderRadius="24px"
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Hero;
