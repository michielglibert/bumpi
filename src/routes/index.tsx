import { List, ListItem, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

const Index: React.FC = () => {
  return (
    <VStack>
      <Text>Routes:</Text>
      <List>
        <ListItem>
          <Link to="/rooms/1">Rooms</Link>
        </ListItem>
        <ListItem>
          <Link to="/rooms/1/standup">standup</Link>
        </ListItem>
        <ListItem>
          <Link to="/rooms/1/summary">summary</Link>
        </ListItem>
      </List>
    </VStack>
  );
};

export default Index;
