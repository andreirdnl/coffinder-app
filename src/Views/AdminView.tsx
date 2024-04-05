import {
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Products } from "./Products";
import { Discount } from "./Discounts";
import { discounts as data } from "../mock/discounts";

export const AdminView = () => {
  const discountState = useState(data);

  return (
    <Tabs mt="50px" p="50px" variant="unstyled">
      <TabList>
        <Tab fontSize="25px">Products</Tab>
        <Tab fontSize="25px">Discounts</Tab>
      </TabList>
      <TabIndicator mt="-1.5px" height="2px" bg="blue.500" borderRadius="1px" />

      <TabPanels mt="50px">
        <TabPanel>
          <Products discountState={discountState} />
        </TabPanel>
        <TabPanel>
          <Discount discountState={discountState} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
