import { Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { ProductsTable } from "../Components/ProductsTable";
import { ProductModal } from "../Components/ProductModal";
import { products as data } from "../mock/products";

export const Products = ({ discountState }: any) => {
  const [isOpen, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const [products, setProducts] = useState(data);
  const handleProduct = (product: any) => setProducts([...products, product]);

  const [discounts, setDiscounts] = discountState;

  return (
    <Box>
      <ProductsTable products={products} discounts={discounts} />
      <Box display="flex" mt="10" justifyContent="flex-end">
        <Button onClick={() => setOpen(true)}>Add new product</Button>
      </Box>
      <ProductModal
        isOpen={isOpen}
        onClose={handleClose}
        handleProduct={handleProduct}
      />
    </Box>
  );
};
