import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import { Products } from "./Products";
import { Discount } from "./Discounts";

export const AdminView = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Products</Tab>
        <Tab>Discounts</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Products />
        </TabPanel>
        <TabPanel>
          <Discount />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
