import { Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { CustomTable } from "../Components/CustomTable";
import { ProductModal } from "../Components/ProductModal";

export const Products = () => {
  const [isOpen, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <CustomTable />
      <Button onClick={() => setOpen(true)}>Add new product</Button>
      <ProductModal isOpen={isOpen} onClose={handleClose} />
    </Box>
  );
};
