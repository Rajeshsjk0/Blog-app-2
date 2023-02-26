import { Box, SimpleGrid, Stack, Text } from "@chakra-ui/react";

import { ChevronRight16Regular } from "@fluentui/react-icons";

import Logo from "../Logo";
import LinkStyled from "./LinkStyled";
import SocialButton from "./SocialButton";
import ListHeader from "./ListHeader";

export default function Footer() {
  return (
    <Box marginLeft="5.56%" marginRight="5.559%">
      <Box
        as={Stack}
        maxW={"6xl"}
        // py={10}
        p=" 112px 0px"
      >
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "1fr 1fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack
            spacing={6}
            align={"flex-start"}
            justifyContent={"space-between"}
            h={"180.72px"}
            w={"17.5%"}
          >
            <Box
              w={"100%"}
              h={"42.72px"}
              p={"1px,0px,1px,0px"}
              alignSelf={"stretch"}
            >
              <Logo />
            </Box>
            <Stack w={"100%"} h={"122px"} alignItems={"flex-start"} p={"0"}>
              <Stack
                direction={"row"}
                h={"24px"}
                justifyContent={"flex-start"}
                p={"0"}
              >
                <SocialButton label={"Twitter"} href={"#"}>
                  <ChevronRight16Regular color="#374151" height={"14px"} />
                </SocialButton>
                <Text
                  display={"flex"}
                  // backgroundColor={"#374151"}
                  color={"#374151"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  fontWeight={"400"}
                  fontSize={"12px"}
                  lineHeight={"20px"}
                  p={0}
                  margin={0}
                >
                  Facebook
                </Text>
              </Stack>
              <Stack
                direction={"row"}
                h={"24px"}
                justifyContent={"flex-start"}
                p={"0"}
              >
                <SocialButton label={"Twitter"} href={"#"}>
                  <ChevronRight16Regular color="#374151" height={"14px"} />
                </SocialButton>
                <Text
                  display={"flex"}
                  // backgroundColor={"#374151"}
                  color={"#374151"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  fontWeight={"400"}
                  fontSize={"12px"}
                  lineHeight={"20px"}
                  p={0}
                  margin={0}
                >
                  Twitter
                </Text>
              </Stack>
              <Stack
                direction={"row"}
                h={"24px"}
                justifyContent={"flex-start"}
                p={"0"}
              >
                <SocialButton label={"Twitter"} href={"#"}>
                  <ChevronRight16Regular color="#374151" height={"14px"} />
                </SocialButton>
                <Text
                  display={"flex"}
                  // backgroundColor={"#374151"}
                  color={"#374151"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  fontWeight={"400"}
                  fontSize={"12px"}
                  lineHeight={"20px"}
                  p={0}
                  margin={0}
                >
                  Instagram
                </Text>
              </Stack>
              <Stack
                direction={"row"}
                h={"24px"}
                justifyContent={"flex-start"}
                p={"0"}
              >
                <SocialButton label={"Twitter"} href={"#"}>
                  <ChevronRight16Regular color="#374151" height={"14px"} />
                </SocialButton>
                <Text
                  display={"flex"}
                  // backgroundColor={"#374151"}
                  color={"#374151"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  fontWeight={"400"}
                  fontSize={"12px"}
                  lineHeight={"20px"}
                  p={0}
                  margin={0}
                >
                  Youtube
                </Text>
              </Stack>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Use Cases</ListHeader>
            <LinkStyled prop1={"#"}>Abstergo Ltd.</LinkStyled>
            <LinkStyled prop1={"#"}>Nursing Assistant</LinkStyled>
            <LinkStyled prop1={"#"}>Medical Assistant</LinkStyled>
            <LinkStyled prop1={"#"}>Marketing Coordinator</LinkStyled>
            <LinkStyled prop1={"#"}>Dog Trainer</LinkStyled>
            <LinkStyled prop1={"#"}>Web Designer</LinkStyled>
            <LinkStyled prop1={"#"}>President of Sales</LinkStyled>
            <LinkStyled prop1={"#"}>Medical Assistant</LinkStyled>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Categories</ListHeader>
            <LinkStyled prop1={"#"}>Algeria</LinkStyled>
            <LinkStyled prop1={"#"}>South Africa</LinkStyled>
            <LinkStyled prop1={"#"}>Central African Republic</LinkStyled>
            <LinkStyled prop1={"#"}>Afghanistan</LinkStyled>
            <LinkStyled prop1={"#"}>Viet Nam</LinkStyled>
            <LinkStyled prop1={"#"}>Iran (Islamic Republic of)</LinkStyled>
            <LinkStyled prop1={"#"}>Pakistan</LinkStyled>
            <LinkStyled prop1={"#"}>Serbia</LinkStyled>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Documentations</ListHeader>
            <LinkStyled prop1={"#"}>Dog Trainer</LinkStyled>
            <LinkStyled prop1={"#"}>Nursing Assistant</LinkStyled>
            <LinkStyled prop1={"#"}>Marketing Coordinator</LinkStyled>
            <LinkStyled prop1={"#"}>President of Sales</LinkStyled>
            <LinkStyled prop1={"#"}>Web Designer</LinkStyled>
            <LinkStyled prop1={"#"}>Medical Assistant</LinkStyled>
            <LinkStyled prop1={"#"}>Dog Trainer</LinkStyled>
            <LinkStyled prop1={"#"}>President of Sales</LinkStyled>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Our Conditions</ListHeader>
            <LinkStyled prop1={"#"}>Ethical Hacker</LinkStyled>
            <LinkStyled prop1={"#"}>UI/UX Designer</LinkStyled>
            <LinkStyled prop1={"#"}>Software Tester</LinkStyled>
            <LinkStyled prop1={"#"}>Scrum Master</LinkStyled>
            <LinkStyled prop1={"#"}>Project Manager</LinkStyled>
            <LinkStyled prop1={"#"}>Team Leader</LinkStyled>
            <LinkStyled prop1={"#"}>Software Development</LinkStyled>
            <LinkStyled prop1={"#"}>Software Developer</LinkStyled>
          </Stack>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
