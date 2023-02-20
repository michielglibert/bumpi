import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./routes";
import { Rooms } from "./features/rooms";
import { Standup } from "./features/standup";
import { Summary } from "./features/summary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/rooms/:roomId",
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

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
