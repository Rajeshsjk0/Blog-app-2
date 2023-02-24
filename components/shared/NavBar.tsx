import {
  CloseButton,
  Flex,
  Heading,
  Hide,
  HStack,
  IconButton,
  Show,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
// import NextLink from "next/link";
// import { Link } from "@chakra-ui/react";
import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Text,
  Box,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import {
  ChevronDown16Regular,
  BrightnessHigh24Regular,
  Search24Regular,
  TextCollapse20Regular,
  Search12Regular,
  List16Regular,
  List24Regular,
  ClosedCaption20Regular,
  ClosedCaption16Filled,
  List24Filled,
} from "@fluentui/react-icons";

import Logo from "./Logo";
import { useState } from "react";
const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "SOP",
    path: "/sop",
  },
  {
    name: "Guidelines",
    path: "/guidelines",
  },
  {
    name: "Jobs",
    path: "/jobs",
  },
  {
    name: "Articles",
    path: "/articles",
  },
  {
    name: "Others",
    subRoutes: [
      // {
      //   name: "About US",
      //   path: "/about-us",
      // },
      {
        name: "Contact us",
        path: "/contact-us",
      },
      {
        name: "Privacy Policy",
        path: "/privacy-policy",
      },
      {
        name: "Refund Policy",
        path: "/refund-policy",
      },
      {
        name: "Terms and Conditions",
        path: "/terms-and-conditions",
      },
    ],
  },
];

const NavBar = () => {
  const router = useRouter();
  const { isOpen, onToggle } = useDisclosure();
  const [isSmallerThanSm] = useMediaQuery("(max-width: 30em)");
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };
  const _is_selected_path = (route: any) => {
    if (route.path === router.pathname) {
      return "solid";
    } else {
      return "ghost";
    }
  };

  const handleClickLogin = () => {
    return router.push("/login");
  };
  return (
    <HStack
      px={[10, 10, 10, 10, 20]}
      justifyContent="space-between"
      width="full"
    >
      <Box
        width={["45px", "45px", "40px", "40px"]}
        height={["45px", "45px", "40px", "40px"]}
      >
        <Logo />
      </Box>

      <HStack
        px={5}
        py={5}
        spacing={5}
        w={"full"}
        justifyContent="space-between"
      >
        <Hide below="md">
          <HStack spacing={5}>
            {routes.map((route: any, index: any) => {
              if (!route.subRoutes?.length) {
                return (
                  <Link key={index} href={route.path}>
                    <Button variant={_is_selected_path(route)}>
                      {route.name}
                    </Button>
                  </Link>
                );
              } else {
                return (
                  <Menu key={index} isLazy>
                    <MenuButton fontWeight={"semibold"}>
                      <HStack>
                        <Text>{route.name}</Text>
                        <ChevronDown16Regular />
                      </HStack>
                    </MenuButton>
                    <MenuList>
                      {route.subRoutes.map((sr: any, idx: number) => {
                        return (
                          <MenuItem key={idx}>
                            <Link href={sr.path}>{sr.name}</Link>
                          </MenuItem>
                        );
                      })}
                    </MenuList>
                  </Menu>
                );
              }
            })}
          </HStack>{" "}
        </Hide>

        <Hide below="md">
          <HStack spacing={10}>
            <BrightnessHigh24Regular cursor={"pointer"} />
            <Search12Regular cursor={"pointer"} />
            <Button
              borderRadius={58}
              colorScheme="brand"
              bg="brand"
              onClick={() => handleClickLogin()}
            >
              Login
            </Button>
          </HStack>
        </Hide>
      </HStack>
      {isSmallerThanSm ? (
        <>
          <IconButton
            aria-label="Open menu"
            display={{ base: "block", md: "none" }}
            onClick={() => handleMenuClick()}
            icon={showMenu ? <ClosedCaption20Regular /> : <List24Filled />}
            variant="ghost"
          />
          {showMenu && (
            <Box
              pt={{ base: 5, md: 5 }}
              position="absolute"
              width="full"
              zIndex={100}
              bg="white"
              shadow={"2xl"}
              left={0}
              top={0}
            >
              <CloseButton  onClick={() => handleMenuClick()} />

              <Flex
                direction="column"
                align="center"
                justify="center"
                padding={10}
              >
                {routes.map((route: any, index: any) => {
                  if (!route.subRoutes?.length) {
                    return (
                      <Link key={index} href={route.path}>
                        <Button variant={_is_selected_path(route)}>
                          {route.name}
                        </Button>
                      </Link>
                    );
                  } else {
                    return (
                      <Menu key={index} isLazy>
                        <MenuButton fontWeight={"semibold"}>
                          <HStack>
                            <Text>{route.name}</Text>
                            <ChevronDown16Regular />
                          </HStack>
                        </MenuButton>
                        <MenuList>
                          {route.subRoutes.map((sr: any, idx: number) => {
                            return (
                              <MenuItem key={idx}>
                                <Link href={sr.path}>{sr.name}</Link>
                              </MenuItem>
                            );
                          })}
                        </MenuList>
                      </Menu>
                    );
                  }
                })}
              </Flex>
            </Box>
          )}
        </>
      ) : null}
    </HStack>
  );
};

export default NavBar;
