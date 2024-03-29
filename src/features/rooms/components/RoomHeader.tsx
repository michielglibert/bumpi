import { Text, HStack, VStack, Avatar, AvatarGroup } from "@chakra-ui/react";
import React from "react";

export const RoomHeader: React.FC = () => {
  return (
    <HStack justify="space-between" spacing="8" w="100%">
      <VStack align="flex-start" spacing="0">
        <Text>Every day at 9pm</Text>
        <Text fontSize="4xl" fontWeight="medium" lineHeight="100%">
          WeGroup Standup
        </Text>
      </VStack>
      <AvatarGroup size="md" max={2}>
        <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
        <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
        <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
        <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
      </AvatarGroup>
    </HStack>
  );
};
