import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { FaMoneyBillWaveAlt } from "react-icons/fa";

export const DiscountsTable = (props: any) => {
  const { discounts = [] } = props;
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th />
            <Th>Code</Th>
            <Th>Name / Description</Th>
            <Th>Product Code</Th>
            <Th>Discount</Th>
          </Tr>
        </Thead>
        <Tbody>
          {discounts.map((product: any) => (
            <Tr key={discounts.indexOf(product)}>
              <Td>
                <FaMoneyBillWaveAlt />
              </Td>
              <Td>{product.code}</Td>
              <Td>
                <Box display="flex" flexDirection="column">
                  <Text as="b">{product.name}</Text>
                  <Text>{product.description}</Text>
                </Box>
              </Td>
              <Td>{product.productCode}</Td>
              <Td>{product.discount}%</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
