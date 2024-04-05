import { Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { discounts as data } from "../mock/discounts";
import { DiscountsTable } from "../Components/DiscountsTable";
import { DiscountModal } from "../Components/DiscountModal";

export const Discount = ({ discountState }: any) => {
  const [isOpen, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const [discounts, setDiscounts] = discountState;
  const handleDiscount = (discount: any) => {
    setDiscounts([...discounts, discount]);
    setOpen(false);
  };

  return (
    <Box>
      <DiscountsTable discounts={discounts} />
      <Box display="flex" mt="10" justifyContent="flex-end">
        <Button onClick={() => setOpen(true)}>Add new discount</Button>
      </Box>
      <DiscountModal
        isOpen={isOpen}
        onClose={handleClose}
        handleDiscount={handleDiscount}
      />
    </Box>
  );
};
