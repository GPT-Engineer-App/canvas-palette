import React, { useState } from "react";
import { Container, VStack } from "@chakra-ui/react";
import ColorPalette from "../components/ColorPalette";
import DrawingCanvas from "../components/DrawingCanvas";

const Index = () => {
  const [brushColor, setBrushColor] = useState("#000000");

  return (
    <Container maxW="100vw" maxH="100vh" p={0} m={0} centerContent>
      <VStack spacing={4} w="100%" h="100%">
        <ColorPalette setBrushColor={setBrushColor} />
        <DrawingCanvas brushColor={brushColor} />
      </VStack>
    </Container>
  );
};

export default Index;