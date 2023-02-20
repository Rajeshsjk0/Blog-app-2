import { Hide, HStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
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
} from "@fluentui/react-icons";
import Logo from "./Logo";
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
      {
        name: "About US",
        path: "/about-us",
      },
      {
        name: "Contact us",
        path: "/contact-us",
      },
      {
        name: "Privacy Policy",
        path: "/privacy-policy",
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

  const _is_selected_path = (route: any) => {
    if (route.path === router.pathname) {
      return "solid";
    } else {
      return "ghost";
    }
  };

  return (
    <HStack px={20} justifyContent="flex-start">
      <Box width="45px" height={"45px"}>
        <Logo />
      </Box>
      <HStack
        px={5}
        py={5}
        spacing={20}
        w={"full"}
        justifyContent="space-between"
      >
        <Hide below="md">
          <HStack spacing={5}>
            {routes.map((route: any, index: any) => {
              if (!route.subRoutes?.length) {
                return (
                  <Link key={index} as={NextLink} href={route.path}>
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
                            <Link as={NextLink} href={sr.path}>
                              {sr.name}
                            </Link>
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

        <HStack spacing={10}>
          <BrightnessHigh24Regular cursor={"pointer"} />
          <Search24Regular cursor={"pointer"} />
          <Button borderRadius={58} colorScheme="brand" bg="brand">
            Login
          </Button>
        </HStack>
      </HStack>
    </HStack>
  );
};

export default NavBar;
