import { Link } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  prop1: string;
  children: ReactNode;
};

const LinkStyled = ({ prop1, children }: Props) => {
  return (
    <Link
      fontWeight={"400"}
      fontSize={"14px"}
      lineHeight={"20px"}
      color={"blueBack"}
      textDecoration={"none"}
      _hover={{ textDecoration: "none" }}
      fontFamily="inter"
      href={prop1}
    >
      {children}
    </Link>
  );
};

export default LinkStyled;
