import { List, ListItem, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import { AppShell } from "../components/AppShell";

const App: React.FC = () => {
  return (
    <AppShell>
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
    </AppShell>
  );
};

export default App;
