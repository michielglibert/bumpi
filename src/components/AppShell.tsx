import { Box, Card, Center, VStack } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";

interface Props {
  header?: React.ReactElement;
}

export const AppShell: React.FC<PropsWithChildren<Props>> = ({
  children,
  header,
}) => {
  return (
    <Center flexDir="column" bg="blackAlpha.50" minH="100%" p="8">
      <VStack maxW="4xl" w="100%" align="stretch" spacing="4">
        {header}
        <Card p="6">{children}</Card>
      </VStack>
    </Center>
  );
};
