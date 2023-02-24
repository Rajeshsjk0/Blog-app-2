import {
    Box,
    Text,
    Center,
    Card,
    FormControl,
    FormLabel,
    Input,
    Button,
    Heading,
  } from "@chakra-ui/react";
  import { Link } from "@chakra-ui/react";
  
  export default function RegisterScreen() {
    return (
        <Box w={"full"}>
          <Box bg="lightBlueBackground" h="280px">
            <Center p={20} flexDirection="column" gap={3}>
              <Heading textAlign={"center"}>🎉 Sign up</Heading>
              <Text textAlign={"center"}>
                Welcome to our blog magazine Community
              </Text>
            </Center>
          </Box>
          <Center>
            <Card
              gap={5}
              bg="white"
              mt={-20}
              width={"80%"}
              px={[10, 10, 20, 30, 40]}
              py={[20, 20, 20, 20, 20]}
            >
              <FormControl width={["full"]}>
                <FormLabel>Email address</FormLabel>
                <Input placeholder="example@example.com" type="email" w="full" />
              </FormControl>
              <FormControl width={["full"]}>
                <FormLabel>Password</FormLabel>
                <Input type="password" w="full" />
              </FormControl>
              <Button colorScheme={"brand"} bg="brand" borderRadius={50}>
                Sign up
              </Button>
              <Text textAlign={"center"}>
                Already have an account? {" "}
                <Link href={"/login"} color="brand">
                   Sign in
                </Link>
              </Text>
            </Card>
          </Center>
        </Box>
    );
  }
  