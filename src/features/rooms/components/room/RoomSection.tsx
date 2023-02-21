import { VStack, Text, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { AvatarWithUser } from "../../../../components/AvatarWithUser";

interface Props {
  status: string;
}

export const RoomSection: React.FC<Props> = ({ status }) => {
  return (
    <VStack align="stretch" spacing="6">
      <Text fontSize="2xl" fontWeight="medium">
        {status}
      </Text>
      <SimpleGrid columns={3} gap="6">
        <AvatarWithUser username="Michiel Glibert" />
        <AvatarWithUser username="Michiel Glibert" />
        <AvatarWithUser username="Michiel Glibert" />
        <AvatarWithUser username="Michiel Glibert" />
        <AvatarWithUser username="Michiel Glibert" />
      </SimpleGrid>
    </VStack>
  );
};
