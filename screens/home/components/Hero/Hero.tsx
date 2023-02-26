import { CustomArrow, MetaInfoIcon } from "@/components";
import UserInfo from "@/components/shared/NewsCards/UserInfoContainer/UserInfo";
import { Tag, Box, Card, Flex, Heading, Image } from "@chakra-ui/react";
import React, { useRef } from "react";
import Slider from "react-slick";
var settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  innerHeight: "100%",
  className: "my-slider",
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
    <Flex direction={"row"} w="full" position={"relative"}>
      <Flex direction={"column"} w="full">
        <Slider ref={sliderRef} {...settings}>
          <Box
            h={{ base: "500px", md: "100%" }}
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
          >
            <Flex
              w={"100%"}
              direction={{ base: "column", md: "row" }}
              h={"100%"}
            >
              <Box
                width={{ base: "58%", md: "32%" }}
                ml={{ base: "15px", md: "0" }}
                position="relative"
              >
                <Card
                  width={{
                    base: "160%",
                    sm: "160%",
                    md: "140%",
                    lg: "120%",
                  }}
                  height={{ base: "auto", md: "320px" }}
                  borderRadius="16px"
                  position={"absolute"}
                  background="rgba(255, 255, 255, 0.7)"
                  border="2px solid #FFFFFF"
                  boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  backdropFilter="blur(37px)"
                  left={"0"}
                  top={{ base: "260px", md: "28px" }}
                  marginBottom={{ base: "20px", md: "0" }}
                >
                  <Flex direction="column" borderRadius={"16px"}>
                    <Box
                      marginTop={{ base: "10px", md: "40px" }}
                      pl={{ base: "10px", md: "40px" }}
                      paddingBottom={{ base: "10px", md: "26px" }}
                    >
                      <Tag
                        borderRadius={"10px"}
                        fontSize="12px"
                        marginRight={"8px"}
                        padding="2px 10px"
                        colorScheme="red"
                      >
                        Travel
                      </Tag>
                      <Tag
                        borderRadius={"10px"}
                        fontSize="12px"
                        padding="2px 10px"
                        colorScheme="green"
                      >
                        Tech
                      </Tag>
                    </Box>
                    <Heading
                      fontSize={{ base: "14px", md: "20px", lg: "24px" }}
                      color={"#1F2937"}
                      fontWeight="500"
                      lineHeight={{ base: "20px", md: "32px" }}
                      pl={{ base: "10px", md: "40px" }}
                      pr={{ base: "10px", md: "40px" }}
                      pb={{ base: "10px", md: "26px" }}
                    >
                      50 life changing motivational quotes for entrepreneurs
                    </Heading>
                    <Box pl={{ base: "10px", md: "40px" }}>
                      <UserInfo
                        style={{}}
                        image="https://bit.ly/dan-abramov"
                        userName="Joinh Davide"
                        date="May 20, 2021 · 3 min read"
                      />
                    </Box>
                    <Box pl={{ base: "10px", md: "40px" }}>
                      <MetaInfoIcon />
                    </Box>
                  </Flex>
                </Card>
              </Box>
              <Box width={"100%"} bottom="auto">
                <Image
                  src="https://thumbs.dreamstime.com/b/man-silhouette-stand-alone-beach-watching-romantic-colorful-sunset-73828239.jpg"
                  alt="Hero Section"
                  width="100%"
                  h={{ base: "287px", md: "471px" }}
                  borderRadius="16px"
                />
              </Box>
            </Flex>
          </Box>
          <Box
            h={{ base: "500px", md: "100%" }}
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
          >
            <Flex
              w={"100%"}
              direction={{ base: "column", md: "row" }}
              h={"100%"}
            >
              <Box
                width={{ base: "58%", md: "32%" }}
                ml={{ base: "15px", md: "0" }}
                position="relative"
              >
                <Card
                  width={{
                    base: "160%",
                    sm: "160%",
                    md: "140%",
                    lg: "120%",
                  }}
                  height={{ base: "auto", md: "320px" }}
                  borderRadius="16px"
                  position={"absolute"}
                  background="rgba(255, 255, 255, 0.7)"
                  border="2px solid #FFFFFF"
                  boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  backdropFilter="blur(37px)"
                  left={"0"}
                  top={{ base: "260px", md: "28px" }}
                  marginBottom={{ base: "20px", md: "0" }}
                >
                  <Flex direction="column" borderRadius={"16px"}>
                    <Box
                      marginTop={{ base: "10px", md: "40px" }}
                      pl={{ base: "10px", md: "40px" }}
                      paddingBottom={{ base: "10px", md: "26px" }}
                    >
                      <Tag
                        borderRadius={"10px"}
                        fontSize="12px"
                        marginRight={"8px"}
                        padding="2px 10px"
                        colorScheme="red"
                      >
                        Travel
                      </Tag>
                      <Tag
                        borderRadius={"10px"}
                        fontSize="12px"
                        padding="2px 10px"
                        colorScheme="green"
                      >
                        Tech
                      </Tag>
                    </Box>
                    <Heading
                      fontSize={{ base: "14px", md: "20px", lg: "24px" }}
                      color={"#1F2937"}
                      fontWeight="500"
                      lineHeight={{ base: "20px", md: "32px" }}
                      pl={{ base: "10px", md: "40px" }}
                      pr={{ base: "10px", md: "40px" }}
                      pb={{ base: "10px", md: "26px" }}
                    >
                      50 life changing motivational quotes for entrepreneurs
                    </Heading>
                    <Box pl={{ base: "10px", md: "40px" }}>
                      <UserInfo
                        style={{}}
                        image="https://bit.ly/dan-abramov"
                        userName="Joinh Davide"
                        date="May 20, 2021 · 3 min read"
                      />
                    </Box>
                    <Box pl={{ base: "10px", md: "40px" }}>
                      <MetaInfoIcon />
                    </Box>
                  </Flex>
                </Card>
              </Box>
              <Box width={"100%"} bottom="auto">
                <Image
                  src="https://thumbs.dreamstime.com/b/man-silhouette-stand-alone-beach-watching-romantic-colorful-sunset-73828239.jpg"
                  alt="Hero Section"
                  width="100%"
                  h={{ base: "287px", md: "471px" }}
                  borderRadius="16px"
                />
              </Box>
            </Flex>
          </Box>
        </Slider>
        <Flex
          position={"absolute"}
          bottom={{ base: "10px", md: "27px" }}
          left={{ base: "10px", md: "40px" }}
          gap="11px"
        >
          <CustomArrow direction="left" onClick={previous} />
          <CustomArrow direction="right" onClick={next} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Hero;
