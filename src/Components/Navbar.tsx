import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import { FaCoffee, FaUser } from "react-icons/fa";

export const Navbar = () => {
  return (
    <Box display="flex" justifyContent="space-between" bg="grey">
      <Box display="flex">
        <FaCoffee />
        <Text>Coffinder</Text>
      </Box>
      <FaUser />
    </Box>
  );
};
