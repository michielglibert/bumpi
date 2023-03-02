import {
  Button,
  Center,
  HStack,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useUserStore from "../../../stores/userStore";
import { FillInModal } from "../components/fill-in/FillInModal";
import { NamePrompt } from "../components/NamePrompt";
import { RoomSection } from "../components/room/RoomSection";

export const Rooms: React.FC = () => {
  const fillInModal = useDisclosure();
  const userPrompt = useDisclosure();
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    if (!user) userPrompt.onOpen();
  }, []);

  return (
    <>
      <NamePrompt isOpen={userPrompt.isOpen} onClose={userPrompt.onClose} />
      <FillInModal isOpen={fillInModal.isOpen} onClose={fillInModal.onClose} />
      <VStack spacing="8" align="stretch">
        <RoomSection status="Ready" />
        <RoomSection status="Preparing" />
        <Center as={HStack}>
          <Button variant="outline" onClick={fillInModal.onOpen}>
            Fill in standup
          </Button>
          <Button as={Link} to="/rooms/1/standup">
            Start standup
          </Button>
        </Center>
      </VStack>
    </>
  );
};
