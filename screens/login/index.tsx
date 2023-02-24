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
  HStack,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

export default function Login() {
  return (
    <Box w={"full"}>
      <Box bg="lightBlueBackground" h="280px">
        <Center p={20} flexDirection="column" gap={3}>
          <Heading textAlign={"center"}>🔑 Login</Heading>
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
            <FormLabel>
              <HStack justifyContent={"space-between"}>
                <Text>Password</Text>{" "}
                <Link href={"/forgot-password"} color="brand">
                  Forgot Password?
                </Link>
              </HStack>
            </FormLabel>
            <Input type="password" w="full" />
          </FormControl>
          <Button colorScheme={"brand"} bg="brand" borderRadius={50}>
            Continue
          </Button>
          <Text textAlign={"center"}>
            New user?{" "}
            <Link href={"/register"} color="brand">
              Create an account
            </Link>
          </Text>
        </Card>
      </Center>
    </Box>
  );
}
