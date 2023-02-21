import { Box } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import { AppShell } from "../../../components/AppShell";
import { RoomHeader } from "./RoomHeader";

export const RoomLayout: React.FC = () => {
  return (
    <AppShell header={<RoomHeader />}>
      <Outlet />
    </AppShell>
  );
};
