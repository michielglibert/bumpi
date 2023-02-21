import { Box, Button, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const StandupFooter: React.FC = () => {
  return (
    <HStack justify="center" spacing="4">
      <Button
        as={Link}
        to="/rooms/1"
        variant="ghost"
        leftIcon={<Text>{"<"}</Text>}
      >
        Back
      </Button>
      <Button as={Link} to="/rooms/1/summary">
        Finish standup
      </Button>
    </HStack>
  );
};
