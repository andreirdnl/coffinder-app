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
import { FaCoffee } from "react-icons/fa";

export const ProductsTable = (props: any) => {
  const { products = [], discounts = [] } = props;
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th />
            <Th>Code</Th>
            <Th>Name / Description</Th>
            <Th>Discounts</Th>
            <Th>Price</Th>
          </Tr>
        </Thead>
        <Tbody>
          {products.map((product: any) => (
            <Tr key={products.indexOf(product)}>
              <Td>
                <FaCoffee />
              </Td>
              <Td>{product.code}</Td>
              <Td>
                <Box display="flex" flexDirection="column">
                  <Text as="b">{product.name}</Text>
                  <Text>{product.description}</Text>
                </Box>
              </Td>
              <Td>
                {discounts.filter(
                  (discount: any) => discount.productCode == product.code
                ).length || product.discounts}
              </Td>
              <Td>{product.price}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
