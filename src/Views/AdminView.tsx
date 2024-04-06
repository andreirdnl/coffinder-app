import {
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Products } from "./Products";
import { Discount } from "./Discounts";
import { discounts as data, discounts } from "../mock/discounts";
import axios from "axios";

export const AdminView = () => {
  const discountState = useState();

  useEffect(() => {
    const getDiscounts = async () => {
      const { data } = await axios.get("http://localhost:1400/api/discounts");
      console.log("data", data);

      const [discount, setDiscount] = discountState;
      setDiscount(data);
    };

    getDiscounts();
  }, []);

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
