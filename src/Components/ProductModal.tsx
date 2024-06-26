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
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";

type Product = {
  id: string;
  code?: number;
  name?: string;
  description?: string;
  discounts?: number;
  price?: number;
};

export const ProductModal = ({ isOpen, onClose, handleProduct }: any) => {
  const [newProduct, setNewProduct] = useState({
    id: `${Math.floor(100000 + Math.random() * 9000)}`,
  } as Product);
  const handleField = (data: any, field: any) =>
    setNewProduct({ ...newProduct, [field]: data });

  const form = [
    {
      field: "code",
      label: "Code",
      placeholder: "Product's Code",
      type: Input,
    },
    {
      field: "name",
      label: "Name",
      placeholder: "Product's Name",
      type: Input,
    },
    {
      field: "description",
      label: "Description",
      placeholder: "Product's Description",
      type: Textarea,
    },
    {
      field: "price",
      label: "Price",
      placeholder: "Product's Price",
      type: Input,
    },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add a product</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          {form.map((line: any) => (
            <FormControl mt={2} key={form.indexOf(line)}>
              <FormLabel>{line.label}</FormLabel>
              <line.type
                onChange={(e: any) => handleField(e.target.value, line.field)}
                placeholder={line.placeholder}
              />
            </FormControl>
          ))}
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={() => {
              handleProduct(newProduct);
              setNewProduct({
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
