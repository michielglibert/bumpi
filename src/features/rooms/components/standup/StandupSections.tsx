import { VStack } from "@chakra-ui/react";
import React from "react";
import { StandupSectionItem } from "./StandupSectionItem";

export const StandupSections: React.FC = () => {
  return (
    <VStack spacing="8" align="stretch">
      <StandupSectionItem category="Yesterday" />
      <StandupSectionItem category="Today" />
    </VStack>
  );
};
