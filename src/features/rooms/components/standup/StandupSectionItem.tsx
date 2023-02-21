import { VStack, Text, UnorderedList, ListItem } from "@chakra-ui/react";
import React from "react";

interface Props {
  status: string;
}

export const StandupSectionItem: React.FC<Props> = ({ status }) => {
  return (
    <VStack align="stretch">
      <Text fontSize="xl">{status}</Text>
      <UnorderedList pl="8">
        <ListItem>Lorem ipsum dolor sit amet</ListItem>
        <ListItem>Consectetur adipiscing elit</ListItem>
        <ListItem>Integer molestie lorem at massa</ListItem>
        <ListItem>Facilisis in pretium nisl aliquet</ListItem>
      </UnorderedList>
    </VStack>
  );
};
