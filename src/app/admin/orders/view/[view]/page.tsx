import React from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { productApi } from "@/api/productApi";

import OrderViewPage from "@/components/Form/Order-view";
import { ordersApi } from "@/api/ordersApi";
export const metadata: Metadata = {
  title: "Next.js Form Elements Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Form Elements page for NextAdmin Dashboard Kit",
};

async function getOrderId(orderId:string){
  const response:any = await  ordersApi.OrderView(orderId)

  return {response:response.data}
}

const FormElementsPage =async ({params}:{params:{view:string}}) => {
  const orders = await getOrderId(params.view)
  const order = orders.response.data
  console.log(order)
  return (
    <DefaultLayout>
      <OrderViewPage  order={order}  />
    </DefaultLayout>
  );
};

export default FormElementsPage;
