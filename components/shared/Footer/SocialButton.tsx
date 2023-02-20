import { chakra, VisuallyHidden } from "@chakra-ui/react";
import { ReactNode } from "react";
const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      h={"100%"}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default SocialButton;
