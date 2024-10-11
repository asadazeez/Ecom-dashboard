/* eslint-disable react/no-unescaped-entities */
"use client";
import dayjs from "dayjs";
import Divider from '@mui/material/Divider';
type Props = {
  order: any;
};

const OrderViewPage = ({ order }: Props) => {
  return (
    <div className="flex justify-center">
      <div className="relative w-203     gap-9 rounded-lg bg-white p-8  py-10 text-black dark:bg-dark dark:text-white">
        <div className="grid grid-cols-2 border-b-[1px]">
          <div className="flex flex-col justify-center gap-3   p-5 py-9 text-center md:text-start">
            <div className="text-2xl font-bold">
              E-SHOP
              <div className="text-sm mt-6 font-normal">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
                veritatis perspiciatis alias minus molestiae illum quia
                consequuntur
              </div>
            </div>
          </div>







          <div className=" p-5 py-9 text-end font-semibold">
            Invoice: ESHOP{order.orderNumber.toString().padStart(4,"0")}
            <div>Date Issued: {dayjs(order.createdAt).format("DD-MM-YY")}</div>
          </div>
        </div>


        <div className="space-y-3 border-b-[1px] p-5 py-9">
          <div className="font-semibold">Bill To:</div>
          <div>
            Name: {order.billingDetails.firstName}&nbsp;
            {order.billingDetails.lastName}
          </div>
          <div>Address: {order.billingDetails.address} </div>
          <div>Phone Number: {order.billingDetails.phoneNumber}</div>
          <div>E-mail Address: {order.billingDetails.emailAddress}</div>
          <div>Pin Code: {order.billingDetails.pinCode}</div>
          <div>Country: {order.billingDetails.country}</div>
        </div>

        <div className="border-b-[1px] py-6 ">
          <table className="w-full ">
            <thead className="bg-slate-50 dark:bg-transparent ">
              <tr>
                <th className="py-2 ">PRODUCT NAME</th>
                <th className="px-4">PRICE</th>
                <th className="px-4">QUANTITY</th>
                <th className="px-4">SUBTOTAL</th>
              </tr>
            </thead>
            <tbody>
              {order.items.map((item: any, index: number) => (
                <tr key={index}>
                  <td className="py-2">{item.productName.name}</td>
                  <td className="text-center">₹{item.price}</td>
                  <td className="text-center">{item.quantity}</td>
                  <td className="text-center">₹{item.quantity * item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className=" flex mt-7 justify-end ">
          <div className="grid gap-3 grid-cols-2 p-5">
          <div className="">  TOTAL: </div><div className="text-center" >₹{order.total}</div>
            <div>SHIPPING COST: </div> <div className="text-center">₹{order.shippingTotal}</div>
            <div>GRAND TOTAL:</div> <div className="text-center">₹{order.grandTotal}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderViewPage;
