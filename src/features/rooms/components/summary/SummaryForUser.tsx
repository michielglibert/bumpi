import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import { AvatarWithUser } from "../../../../components/AvatarWithUser";
import { StandupSectionItem } from "../standup/StandupSectionItem";
import { StandupSections } from "../standup/StandupSections";

interface Props {
  username: string;
}

export const SummaryForUser: React.FC<Props> = ({ username }) => {
  return (
    <VStack align="stretch" spacing="8">
      <AvatarWithUser username={username} />
      <Box pl="12">
        <StandupSections />
      </Box>
    </VStack>
  );
};
