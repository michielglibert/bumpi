import { Text, VStack } from "@chakra-ui/react";
import React from "react";
import { StandupSections } from "../standup/StandupSections";

export const Summary: React.FC = () => {
  return (
    <VStack>
      <Text fontSize="xl" fontWeight="medium">
        Summary
      </Text>
    </VStack>
  );
};
