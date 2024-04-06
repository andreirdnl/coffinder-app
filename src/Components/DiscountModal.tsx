import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { products } from "../mock/products";
import axios from "axios";

type Discount = {
  id: string;
  code?: number;
  name?: string;
  description?: string;
  discounts?: number;
  price?: number;
};

export const DiscountModal = ({ isOpen, onClose, handleDiscount }: any) => {
  const [newDiscount, setNewDiscount] = useState({
    id: `${Math.floor(100000 + Math.random() * 9000)}`,
  } as Discount);
  const handleField = (data: any, field: any) =>
    setNewDiscount({ ...newDiscount, [field]: data });

  const productCodes = products.map((product: any) => product.code);

  const form = [
    {
      field: "code",
      label: "Code",
      placeholder: "Discount's Code",
      type: Input,
    },
    {
      field: "name",
      label: "Name",
      placeholder: "Name",
      type: Input,
    },
    {
      field: "productCode",
      label: "Product",
      placeholder: "Product's Code",
      type: Select,
      extra: () =>
        productCodes.map((code) => (
          <option key={productCodes.indexOf(code)} value={code}>
            {code}
          </option>
        )),
    },
    {
      field: "description",
      label: "Description",
      placeholder: "Discount's Description",
      type: Textarea,
    },
    {
      field: "discount",
      label: "Discount",
      placeholder: "Discount",
      type: Input,
    },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add a discount</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          {form.map((line: any) => (
            <FormControl mt={2} key={form.indexOf(line)}>
              <FormLabel>{line.label}</FormLabel>
              <line.type
                onChange={(e: any) => handleField(e.target.value, line.field)}
                placeholder={line.placeholder}
              >
                {line.extra && line.extra()}
              </line.type>
            </FormControl>
          ))}
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={async () => {
              const response = await axios.post("http://localhost:1400/api/discounts", {
                ...newDiscount,
              });
              console.log(response);

              handleDiscount(newDiscount);
              setNewDiscount({
                id: `${Math.floor(100000 + Math.random() * 9000)}`,
              });
            }}
          >
            Add
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
