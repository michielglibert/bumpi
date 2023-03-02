import { VStack, Text, Input, UnorderedList, ListItem } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import useStandupStore from "../../../../stores/standupStore";
import { v4 as uuid } from "uuid";

interface Props {
  category: string;
}

const FillInInputSection: React.FC<Props> = ({ category }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const items = useStandupStore((state) => state.items);
  const addItem = useStandupStore((state) => state.addItem);

  const handleAdd = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const value = (event.target as HTMLInputElement).value;
      addItem({ category, text: value, id: uuid() });
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  const categoryItems = items.filter((item) => item.category === category);

  return (
    <VStack align="stretch">
      <Text fontSize="xl">{category}</Text>
      <UnorderedList pl="8">
        {categoryItems.map((item) => (
          <ListItem key={item.id}>{item.text}</ListItem>
        ))}
      </UnorderedList>
      <Input ref={inputRef} onKeyUp={handleAdd} />
    </VStack>
  );
};

export default FillInInputSection;
