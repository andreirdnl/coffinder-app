import { Box, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ProductsTable } from "../Components/ProductsTable";
import { ProductModal } from "../Components/ProductModal";
import { products as data } from "../mock/products";
import axios from "axios";

export const Products = ({ discountState }: any) => {
  const [isOpen, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const [products, setProducts] = useState([] as any[]);
  const handleProduct = (product: any) => setProducts([...products, product]);

  useEffect(() => {
    const getProducts = async () => {
      const { data: response } = await axios.get(
        "http://localhost:1400/api/products"
      );
      console.log("data", response);

      setProducts(response);
    };

    getProducts();
  }, []);

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
