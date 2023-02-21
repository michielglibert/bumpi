import { Text, HStack } from "@chakra-ui/react";
import React from "react";
import { AvatarWithUser } from "../../../../components/AvatarWithUser";

interface Props {
  username: string;
}

export const StandupHeader: React.FC<Props> = ({ username }) => {
  return (
    <HStack justify="space-between" spacing="4" w="100%">
      <Text fontSize="2xl" fontWeight="medium">
        {username} turn
      </Text>
      <AvatarWithUser username={username} />
    </HStack>
  );
};
