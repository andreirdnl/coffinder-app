import React from "react";
import { Avatar, Box, Text, WrapItem } from "@chakra-ui/react";
import { FaCoffee } from "react-icons/fa";

export const Navbar = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      h="60px"
      mt='1'
    >
      <Box display="flex" ml="2" p='7px'>
        <FaCoffee size="40px" />
        <Text ml="5" fontSize="2xl">
          Coffinder
        </Text>
      </Box>
      <WrapItem mr='10px'>
        <Avatar name="Sardaru Andrei" size='md' />
      </WrapItem>
    </Box>
  );
};
