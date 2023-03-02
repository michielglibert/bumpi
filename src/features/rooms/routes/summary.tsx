import { VStack, Text, Divider, Button, Center } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import useUserStore from "../../../stores/userStore";
import { SummaryForUser } from "../components/summary/SummaryForUser";

export const Summary: React.FC = () => {
  const user = useUserStore((state) => state.user);

  return (
    <VStack spacing="8" align="stretch">
      <Text fontSize="2xl" fontWeight="medium">
        Summary
      </Text>
      <VStack
        spacing="8"
        align="stretch"
        divider={<Divider borderColor="blackAlpha.300" />}
      >
        <SummaryForUser username={user} />
      </VStack>
      <Center>
        <Button as={Link} to="/rooms/1">
          Back to room
        </Button>
      </Center>
    </VStack>
  );
};
