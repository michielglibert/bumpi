import { Button, Center, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { RoomSection } from "../components/room/RoomSection";

export const Rooms: React.FC = () => {
  return (
    <VStack spacing="8" align="stretch">
      <RoomSection status="Ready" />
      <RoomSection status="Preparing" />
      <Center>
        <Button as={Link} to="/rooms/1/standup">
          Start standup
        </Button>
      </Center>
    </VStack>
  );
};
