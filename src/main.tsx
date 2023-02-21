import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./routes/app";
import { Rooms } from "./features/rooms";
import { Standup } from "./features/standup";
import { Summary } from "./features/summary";
import theme from "./theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
