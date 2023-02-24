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
    Textarea,
  } from "@chakra-ui/react";
  
  export default function ContactUs() {
    return (
        <Box w={"full"}>
          <Box bg="lightBlueBackground" h="280px">
            <Center p={20} flexDirection="column" gap={3}>
              <Heading textAlign={"center"}>☎ Contact Us</Heading>
              <Text textAlign={"center"}>
                Drop us message and we’ll get back for you.
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
                <FormLabel>Full Name</FormLabel>
                <Input placeholder="Danien Doe" type="email" w="full" />
              </FormControl>
              <FormControl width={["full"]}>
                <FormLabel>Email address</FormLabel>
                <Input placeholder="example@example.com" type="email" w="full" />
              </FormControl>
              <FormControl width={["full"]}>
                <FormLabel>Message</FormLabel>
                <Textarea placeholder="message" w="full" />
              </FormControl>
              <Button colorScheme={"brand"} bg="brand" borderRadius={50}>
                Send message
              </Button>
            </Card>
          </Center>
        </Box>
    );
  }
  