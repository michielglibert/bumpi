import { VStack } from "@chakra-ui/react";
import React from "react";
import { StandupFooter } from "../components/standup/StandupFooter";
import { StandupHeader } from "../components/standup/StandupHeader";
import { StandupSection } from "../components/standup/StandupSection";

export const Standup: React.FC = () => {
  return (
    <VStack spacing="8" align="stretch">
      <StandupHeader username="Michiel Glibert" />
      <StandupSection status="Yesterday" />
      <StandupSection status="Today" />
      <StandupFooter />
    </VStack>
  );
};
