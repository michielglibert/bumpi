import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./routes/app";
import { Rooms, Standup, Summary } from "./features/rooms";
import theme from "./theme";
import { RoomLayout } from "./features/rooms/components/RoomLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/rooms/:roomId",
    element: <RoomLayout />,
    children: [
      {
        path: "",
        element: <Rooms />,
      },
      {
        path: "standup",
        element: <Standup />,
      },
      {
        path: "summary",
        element: <Summary />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
