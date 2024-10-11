import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";


import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

import { ordersApi } from "@/api/ordersApi";
import Order from "@/components/Tables/Order";

export const metadata: Metadata = {
  title: "Next.js Tables Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Tables page for NextAdmin Dashboard Kit",
};

async function getAllOrders(){
  const response:any = await ordersApi.getAllOrders() 
  return response.data
}

const TablesPage = async () => {

  const orders = await getAllOrders()
  const ordersList = orders.data.orders
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Orders" />

      <div className="flex flex-col gap-10">
        
        <Order ordersList = {ordersList}  />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
