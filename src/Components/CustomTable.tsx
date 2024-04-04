import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { FaCoffee } from "react-icons/fa";

export const CustomTable = () => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th />
            <Th>Id</Th>
            <Th>Name / Description</Th>
            <Th>Discounts</Th>
            <Th>Price</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <FaCoffee />
            </Td>
            <Td>10</Td>
            <Td>Latte / bla bla</Td>
            <Td>3</Td>
            <Td>10 lei</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
