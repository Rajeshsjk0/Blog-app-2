import React from "react";
import {
  Flex,
  Heading,
  Text,
  Box,
  Button,
  Image,
  Tag,
  Avatar,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { NewsCardWithRightImage } from "@/components/index";
import { NewsCardWithTopImage } from "@/components/index";
import { ArrowRight12Filled } from "@fluentui/react-icons";
import MetaInfoIcon from "@/components/shared/NewsCards/MetaInfoIcon/IconInfoContinaer";

const Trending = () => {
  const trendingMenuStyle = {
    display: "inline-block",
    padding: "12px 21px",
    color: "subHeading",
    fontSize: "16px",
    cursor: "pointer",
  };
  return (
    <Flex
      w="100%"
      direction={"column"}
      borderRadius="40px"
      paddingTop={"20px"}
    >
      <Heading
        size="lg"
        fontSize="36px"
        color={"#1F2937"}
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
            {["New York", "San Francisco", "Chicago", "Las Vegas"].map((tab: any) => {
              return <Text
              sx={trendingMenuStyle}
              _hover={{
                background: "#134E4A",
                borderRadius: "52px",
                color: "#F0FDFA",
              }}
            >
              {tab}
            </Text>
            })}
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
            borderRadius={16}
          >
            <Image
              src="https://thumbs.dreamstime.com/b/man-silhouette-stand-alone-beach-watching-romantic-colorful-sunset-73828239.jpg"
              alt="Hero Section"
              width="100%"
              height="388px"
              borderTopRadius={16}
            />
            <Box w={"100%"} padding="20px">
              <Tag
                borderRadius={"10px"}
                fontSize="12px"
                marginRight={"8px"}
                colorScheme="red"
              >
                Travel
              </Tag>
              <Tag borderRadius={"10px"} fontSize="12px" colorScheme="green">
                Tech
              </Tag>
            </Box>
            <Heading
              paddingLeft={"20px"}
              fontSize="24px"
              color={"#111827"}
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
            <NewsCardWithRightImage style={{ paddingBottom: "20px" }} />
            <NewsCardWithRightImage style={{ paddingBottom: "20px" }} />
            <NewsCardWithRightImage />
          </Flex>
        </Flex>
        <Box paddingTop={"20px"}>
          <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            <GridItem>
              <NewsCardWithTopImage />
            </GridItem>
            <GridItem>
              <NewsCardWithTopImage />
            </GridItem>
            <GridItem>
              <NewsCardWithTopImage />
            </GridItem>
            <GridItem>
              <NewsCardWithTopImage />
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </Flex>
  );
};

export default Trending;
