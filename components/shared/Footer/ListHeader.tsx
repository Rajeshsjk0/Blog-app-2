import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      fontWeight={"700"}
      fontSize={"14px"}
      lineHeight={"20px"}
      color={"#1F2937"}
    >
      {children}
    </Text>
  );
};
export default ListHeader;
