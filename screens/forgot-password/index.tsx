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
  Link,
} from "@chakra-ui/react";

export default function ForgotPassword() {
  return (
    <Box w={"full"}>
      <Box bg="lightBlueBackground" h="280px">
        <Center p={20} flexDirection="column" gap={3}>
          <Heading textAlign={"center"}>🔐 Forgot password</Heading>
          <Text textAlign={"center"}>
            We will sent reset password instruction to your email
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
          <Button colorScheme={"brand"} bg="brand" borderRadius={50}>
            Continue
          </Button>
          <Text textAlign={"center"}>
            Go back for{" "}
            <Link href={"/login"} color="brand">
              Sign in
            </Link>{" "}
            /{" "}
            <Link href={"/register"} color="brand">
              Sign up
            </Link>
          </Text>
        </Card>
      </Center>
    </Box>
  );
}
