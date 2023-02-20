import FullLengthImage from "@/components/shared/NewsCards/FullLengthImage";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import React, { useRef } from "react";

import Slider from "react-slick";
import { CustomArrow } from "@/components";

const SectionVerticals: React.FC = () => {
  const newses: { image: string }[] = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg",
    },
  ];

  const sliderRef = useRef<Slider>(null);

  const next = () => {
    sliderRef.current?.slickNext();
  };

  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  var settings = {
    // dots: true,
    // infinite: true,
    // speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box w={"100%"} paddingTop="128px">
      <Box w={"100%"}>
        <Flex w={"100%"} justifyContent="space-between" alignItems={"center"}>
          <Heading
            w={"100%"}
            fontStyle="normal"
            fontFamily={"Poppins"}
            fontWeight="600"
            fontSize="36px"
            lineHeight={"40px"}
            color="#111827"
          >
            Latest Articles
          </Heading>
          <Flex justifyContent="space-between" alignItems={"center"} gap="20px">
            <Text
              fontSize="14px"
              color={"#1F2937"}
              fontFamily="Inter"
              fontWeight="400"
              lineHeight={"20px"}
              paddingBottom={"4px"}
            >
              1/2
            </Text>
            <Flex justifyContent="center" alignItems={"center"} gap="4px">
              <CustomArrow direction="left" onClick={previous} />
              <CustomArrow direction="right" onClick={next} />
            </Flex>
          </Flex>
        </Flex>

        <Text
          w={"100%"}
          fontStyle="normal"
          fontFamily={"Poppins"}
          fontWeight="400"
          fontSize="18px"
          lineHeight={"28px"}
          color="#4B5563"
        >
          Những địa điểm thường đến mà Luxstay gợi ý dành cho bạn
        </Text>
      </Box>
      <Slider ref={sliderRef} {...settings}>
        <div>
          <Flex
            w={"100%"}
            direction="row"
            marginTop={"32px"}
            justifyContent="space-between"
          >
            {newses.map((news) => {
              return (
                <FullLengthImage
                  style={{ paddingTop: "32px" }}
                  image="https://bit.ly/dan-abramov"
                  userName="Joinh Davide"
                  date="May 20, 2021 · 3 min read"
                  newsImage={news.image}
                />
              );
            })}
          </Flex>
        </div>
        <div>
          <Flex
            w={"100%"}
            direction="row"
            marginTop={"32px"}
            justifyContent="space-between"
          >
            {newses.map((news) => {
              return (
                <FullLengthImage
                  style={{ paddingTop: "32px" }}
                  image="https://bit.ly/dan-abramov"
                  userName="Joinh Davide"
                  date="May 20, 2021 · 3 min read"
                  newsImage={news.image}
                />
              );
            })}
          </Flex>
        </div>
      </Slider>
    </Box>
  );
};

export default SectionVerticals;
