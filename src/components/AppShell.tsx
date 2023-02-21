import { Box, Card, Center } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";

export const AppShell: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Center flexDir="column" bg="blackAlpha.50" minH="100%" p="8">
      <Card maxW="4xl" w="100%" p="6">
        {children}
      </Card>
    </Center>
  );
};
