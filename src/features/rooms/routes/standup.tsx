import { VStack } from "@chakra-ui/react";
import React from "react";
import { StandupFooter } from "../components/standup/StandupFooter";
import { StandupHeader } from "../components/standup/StandupHeader";
import { StandupSectionItem } from "../components/standup/StandupSectionItem";
import { StandupSections } from "../components/standup/StandupSections";

export const Standup: React.FC = () => {
  return (
    <VStack spacing="8" align="stretch">
      <StandupHeader username="Michiel Glibert" />
      <StandupSections />
      <StandupFooter />
    </VStack>
  );
};
