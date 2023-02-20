import { Button } from "@chakra-ui/react";
import {
  TriangleLeft12Filled,
  TriangleRight12Filled,
} from "@fluentui/react-icons";
import React from "react";
import { CustomArrowProps } from "react-slick";

const CustomArrow = (
  props: CustomArrowProps & { direction: "left" | "right" }
) => {
  const { direction, onClick } = props;

  return (
    <Button onClick={onClick} borderRadius="50%" size={"32px"}>
      {direction === "left" ? (
        <TriangleLeft12Filled />
      ) : (
        <TriangleRight12Filled />
      )}
    </Button>
  );
};

export default CustomArrow;
