import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      fontWeight={"700"}
      fontSize={"14px"}
      lineHeight={"20px"}
      color={"blueBack"}
    >
      {children}
    </Text>
  );
};
export default ListHeader;
