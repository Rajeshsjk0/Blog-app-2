import { Box, Flex, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Flex w="100%">
      <Box position="relative">
        <Image
          src="https://via.placeholder.com/150"
          position="absolute"
          right={0}
        />
        <Box bg="white" p={4} boxShadow="md" zIndex={1}>
          This is my card component.
        </Box>
        <Slider {...settings}>
          <Box bg="white" p={4} boxShadow="md" zIndex={1}>
            This is another card component.
          </Box>
          <Box bg="white" p={4} boxShadow="md" zIndex={1}>
            This is a third card component.
          </Box>
        </Slider>
      </Box>
    </Flex>
  );
};

export default Hero1;
