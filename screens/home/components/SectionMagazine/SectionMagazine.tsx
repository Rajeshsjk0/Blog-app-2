import React from "react";
import {
  Flex,
  Heading,
  Text,
  Box,
  Button,
  Image,
  Badge,
  Avatar,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import RightCard from "./RightCard";
import BottomCard from "./BottomCard";
import { ArrowRight12Filled } from "@fluentui/react-icons";
import MetaInfoIcon from "./MetaInfoIcon";

const Trending = () => {
  const trendingMenuStyle = {
    display: "inline-block",
    padding: "12px 21px",
    color: "#4B5563",
    fontSize: "16px",
    cursor: "pointer",
  };
  return (
    <Flex
      w="100%"
      direction={"column"}
      borderRadius="40px"
      paddingTop={"194px"}
    >
      <Heading
        size="lg"
        fontSize="36px"
        color={"#1F2937"}
        fontFamily="Poppins"
        fontWeight="600"
        paddingBottom={"8px"}
      >
        Trending on Ncmaz
      </Heading>
      <Text fontSize="16px" color="#6B7280" paddingBottom={"46px"}>
        Những địa điểm thường đến mà Luxstay gợi ý dành cho bạn
      </Text>
      <Box w={"100%"}>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          paddingBottom="32px"
        >
          <Box fontSize={"16px"} color="#4B5563" cursor={"pointer"}>
            <Text
              sx={trendingMenuStyle}
              _hover={{
                background: "#134E4A",
                borderRadius: "52px",
                color: "#F0FDFA",
              }}
            >
              New York
            </Text>
            <Text
              sx={trendingMenuStyle}
              _hover={{
                background: "#134E4A",
                borderRadius: "52px",
                color: "#F0FDFA",
              }}
            >
              San Francisco
            </Text>
            <Text
              sx={trendingMenuStyle}
              _hover={{
                background: "#134E4A",
                borderRadius: "52px",
                color: "#F0FDFA",
              }}
            >
              Chicago
            </Text>
            <Text
              sx={trendingMenuStyle}
              _hover={{
                background: "#134E4A",
                borderRadius: "52px",
                color: "#F0FDFA",
              }}
            >
              Las Vegas
            </Text>
          </Box>
          <Box>
            <Button
              rightIcon={<ArrowRight12Filled />}
              color={"#4B5563"}
              fontSize="16px"
              borderRadius={"66px"}
              borderColor="#E5E7EB"
              variant="outline"
            >
              Search more
            </Button>
          </Box>
        </Flex>
        <Flex w={"100%"} justifyContent="space-between">
          <Flex
            w={"49%"}
            direction="column"
            border={"1px solid #E5E7EB"}
            borderRadius={"16px"}
          >
            <Image
              src="https://thumbs.dreamstime.com/b/man-silhouette-stand-alone-beach-watching-romantic-colorful-sunset-73828239.jpg"
              alt="Hero Section"
              width="100%"
              height="388px"
            />
            <Box w={"100%"} padding="20px">
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
              paddingLeft={"20px"}
              width={"55%"}
              fontSize="24px"
              color={"#111827"}
              fontFamily="Poppins"
              fontWeight="600"
              lineHeight={"32px"}
              paddingBottom={"8px"}
            >
              50 life changing motivational quotes for entrepreneurs
            </Heading>
            <Text
              paddingLeft={"20px"}
              fontSize="14px"
              color="#6B7280"
              paddingBottom={"20px"}
            >
              An UI/UX case study of an emerging local bicycle brand
            </Text>
            <Flex paddingLeft={"20px"} paddingBottom={"20px"}>
              <Avatar
                padding={"0PX"}
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
              />
              <Flex
                direction={"column"}
                paddingLeft="8px"
                justifyContent={"center"}
              >
                <Heading
                  fontSize="14px"
                  color={"#374151"}
                  fontFamily="Poppins"
                  fontWeight="500"
                  paddingBottom={"4px"}
                >
                  Joinh Davide
                </Heading>
                <Text fontSize="12px" color="#6B7280">
                  May 20, 2021 · 3 min read
                </Text>
              </Flex>
            </Flex>
            <Flex
              // bg={"red"}
              paddingLeft={"20px"}
              height={"36px"}
              paddingBottom="20px"
            >
              <MetaInfoIcon />
            </Flex>
          </Flex>
          <Flex w={"49%"} direction="column">
            <RightCard style={{ paddingBottom: "20px" }} />
            <RightCard style={{ paddingBottom: "20px" }} />
            <RightCard />
          </Flex>
        </Flex>
        <Box paddingTop={"20px"}>
          <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            <GridItem>
              <BottomCard />
            </GridItem>
            <GridItem>
              <BottomCard />
            </GridItem>
            <GridItem>
              <BottomCard />
            </GridItem>
            <GridItem>
              <BottomCard />
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </Flex>
  );
};

export default Trending;
