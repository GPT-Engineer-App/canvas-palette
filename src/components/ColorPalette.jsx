import React from "react";
import { HStack, Button } from "@chakra-ui/react";

const mondrianColors = ["#000000", "#FF0000", "#FFFF00", "#0000FF", "#FFFFFF"];

const ColorPalette = ({ setBrushColor }) => {
  return (
    <HStack spacing={2} p={2}>
      {mondrianColors.map((color) => (
        <Button
          key={color}
          bg={color}
          size="lg"
          onClick={() => setBrushColor(color)}
          border={color === "#FFFFFF" ? "1px solid #000" : "none"}
        />
      ))}
    </HStack>
  );
};

export default ColorPalette;