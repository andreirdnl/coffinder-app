import React from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";
import { Navbar } from "./Components/Navbar";
import { AdminView } from "./Views/AdminView";

export const App = () => {
  return (
    <ChakraProvider>
      <Navbar />
      <AdminView />
    </ChakraProvider>
  );
};
