import { VStack, Text, UnorderedList, ListItem } from "@chakra-ui/react";
import React from "react";
import useStandupStore from "../../../../stores/standupStore";

interface Props {
  category: string;
}

export const StandupSectionItem: React.FC<Props> = ({ category }) => {
  const items = useStandupStore((state) => state.items);
  const categoryItems = items.filter((item) => item.category === category);

  return (
    <VStack align="stretch">
      <Text fontSize="xl">{category}</Text>
      <UnorderedList pl="8">
        {categoryItems.map((item) => (
          <ListItem key={item.id}>{item.text}</ListItem>
        ))}
      </UnorderedList>
    </VStack>
  );
};
