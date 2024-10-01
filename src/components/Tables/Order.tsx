"use client";
import { bannerApi } from "@/api/bannerApi";
import { storageUrl } from "@/utilis/baseUrl";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import DeleteConfirmation from "../DeleteComponent/DeleteConfirmationPopup";
import OrderStatus from "../FormElements/SelectGroup/OrderStatus";

type Props = {
 ordersList: any;
};


const Order = ({ ordersList }: Props) => {
  
 

 

 

  return (
    <div className="rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:py-7.5">
      <div className="mb-4 flex justify-between text-lg font-extrabold text-black dark:text-white">
        Orders
      
      </div>
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-[#F7F9FC] text-left dark:bg-dark-2">
              <th className="min-w-[220px] px-4 py-4 font-medium text-dark dark:text-white xl:pl-7.5">
               Order Number
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-dark dark:text-white">
               Customer
              </th>
              <th className="px-4 py-4   font-medium text-dark dark:text-white xl:pl-7.5">
                Total
              </th>
              <th className="px-4 py-4  font-medium text-dark dark:text-white xl:pr-7.5">
                Grand Total
              </th>
              <th className="px-4 py-4  font-medium text-dark dark:text-white xl:pr-7.5">
               Order Status
              </th>
            </tr>
          </thead>
          <tbody>
            {ordersList.map((Item: any, index: any) => (
              <tr key={index}>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${index === ordersList
            .length - 1 ? "border-b-0" : "border-b"}`}
                >
                 {Item.orderNumber}
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${index === ordersList
            .length - 1 ? "border-b-0" : "border-b"}`}
                >
                  <h5 className="text-dark dark:text-white">{Item.userId}</h5>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${index === ordersList
            .length - 1 ? "border-b-0" : "border-b"}`}
                >
                  <h5 className="text-dark dark:text-white">${Item.total}/-</h5>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${index === ordersList
            .length - 1 ? "border-b-0" : "border-b"}`}
                >
                  <h5 className="text-dark dark:text-white">${Item.grandTotal}/-</h5>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${index === ordersList
            .length - 1 ? "border-b-0" : "border-b"}`}
                >

                    <OrderStatus initialPaymentType={""} initialPaymentStatus={""} initialDeliveryStatus={""}/>
                </td>

                
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     
    </div>
  );
};

export default Order;
