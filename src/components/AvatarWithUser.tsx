import { Text, Avatar, HStack } from "@chakra-ui/react";
import React from "react";

interface Props {
  username: string;
}

export const AvatarWithUser: React.FC<Props> = ({ username }) => {
  return (
    <HStack spacing="3">
      <Avatar name={username} />
      <Text fontSize="lg">{username}</Text>
    </HStack>
  );
};
