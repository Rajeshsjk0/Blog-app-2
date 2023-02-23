import UserInfo from "@/components/shared/NewsCards/UserInfoContainer/UserInfo";
import {
  Box,
  HStack,
  Tag,
  TagLabel, Text, VStack, Wrap
} from "@chakra-ui/react";

export default function Options() {
  return (
    <VStack spacing={5}>
      <Box bg="#F9FAFB" p="4">
        <HStack justifyContent={"space-between"}>
          <Text fontWeight="semibold">🏷 Discover more tags</Text>
          <Text color={"brand"} fontWeight="semibold" fontSize={"sm"}>
            View all
          </Text>
        </HStack>
        <Wrap mt={5} spacing={2}>
          {Array(10)
            //@ts-ignore
            .fill()
            .map((_, i) => (
              <Tag>
                <TagLabel fontWeight={"regular"}>Aliquet neque</TagLabel>
              </Tag>
            ))}
        </Wrap>
      </Box>
      <Box bg="#F9FAFB" p="4">
        <HStack justifyContent={"space-between"}>
          <Text fontWeight="semibold">🏷 Discover Authors</Text>
          <Text color={"brand"} fontWeight="semibold" fontSize={"sm"}>
            View all
          </Text>
        </HStack>
        <Wrap mt={5} spacing={2}>
          {Array(5)
            //@ts-ignore
            .fill()
            .map((_, i) => (
              <UserInfo
                userName={"Niamh O'Shea"}
                image={
                  "https://thumbs.dreamstime.com/b/man-silhouette-stand-alone-beach-watching-romantic-colorful-sunset-73828239.jpg"
                }
                date={"Author Job Descriptions"}
                style={{}}
              />
            ))}
        </Wrap>
      </Box>
    </VStack>
  );
}
