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
import { ordersApi } from "@/api/ordersApi";

type Props = {
  ordersList: any;
};

const Order = ({ ordersList }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 10;

  const filteredOrders = ordersList.filter((orderItem:any) =>

  orderItem.userId .toLowerCase().includes(searchTerm.toLowerCase()) || orderItem.orderNumber.toString().includes(searchTerm)|| orderItem.orderStatus.toString().toLowerCase().includes(searchTerm.toLowerCase()))
  

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const orderData = filteredOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const router = useRouter();

  async function orderStatus(orderId: any, value: any) {
    try {
      const OrderStatus: any = await ordersApi.OrderStatus(orderId, value);
      if (OrderStatus.data.success) {
        toast.success(OrderStatus.data.message);
        router.refresh();
      }
    } catch (errors: any) {
      toast.error(errors.message);
    }
  }

  return (
    <div className="rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:py-7.5">
      <div className="mb-4 flex  text-lg font-extrabold text-black dark:text-white">
        <div>
          <form className="mx-auto max-w-md">
            <label
              htmlFor="default-search"
              className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                <svg
                  className="h-4 w-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-1 px-20 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Search by Order Number or Customer Name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </form>
        </div>
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
              <th className="px-4 py-4  font-medium text-dark dark:text-white xl:pr-7.5">
                View
              </th>
            </tr>
          </thead>
          <tbody>
            {orderData.map((Item: any, index: any) => (
              <tr key={index}>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${
                    index === ordersList.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  ESHOP
                  {Item.orderNumber.toString().padStart(4, "0")}
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${
                    index === ordersList.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  <h5 className="text-dark dark:text-white">{Item.userId}</h5>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${
                    index === ordersList.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  <h5 className="text-dark dark:text-white">₹{Item.total}/-</h5>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${
                    index === ordersList.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  <h5 className="text-dark dark:text-white">
                    ₹{Item.grandTotal}/-
                  </h5>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${
                    index === ordersList.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  <div className="col-lg-4 col-sm-6">
                    <div className="form-group">
                      <select
                        defaultValue={Item.orderStatus}
                        className="form-control form-control-sm"
                        onChange={(event) => {
                          orderStatus(Item._id, event.target.value);
                        }}
                      >
                        <option value="cancelled">Cancelled</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="on the way">On The Way</option>
                        <option value="delivered">Delivered</option>
                      </select>
                    </div>
                  </div>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${
                    index === ordersList.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  <Link href={`/admin/orders/view/${Item._id}`}>
                    <button className="mt-1 hover:text-primary">
                      <svg
                        className="fill-current"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.99935 6.87492C8.27346 6.87492 6.87435 8.27403 6.87435 9.99992C6.87435 11.7258 8.27346 13.1249 9.99935 13.1249C11.7252 13.1249 13.1243 11.7258 13.1243 9.99992C13.1243 8.27403 11.7252 6.87492 9.99935 6.87492ZM8.12435 9.99992C8.12435 8.96438 8.96382 8.12492 9.99935 8.12492C11.0349 8.12492 11.8743 8.96438 11.8743 9.99992C11.8743 11.0355 11.0349 11.8749 9.99935 11.8749C8.96382 11.8749 8.12435 11.0355 8.12435 9.99992Z"
                          fill=""
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.99935 2.70825C6.23757 2.70825 3.70376 4.96175 2.23315 6.8723L2.20663 6.90675C1.87405 7.3387 1.56773 7.73652 1.35992 8.20692C1.13739 8.71064 1.04102 9.25966 1.04102 9.99992C1.04102 10.7402 1.13739 11.2892 1.35992 11.7929C1.56773 12.2633 1.87405 12.6611 2.20664 13.0931L2.23316 13.1275C3.70376 15.0381 6.23757 17.2916 9.99935 17.2916C13.7611 17.2916 16.2949 15.0381 17.7655 13.1275L17.792 13.0931C18.1246 12.6612 18.431 12.2633 18.6388 11.7929C18.8613 11.2892 18.9577 10.7402 18.9577 9.99992C18.9577 9.25966 18.8613 8.71064 18.6388 8.20692C18.431 7.73651 18.1246 7.33868 17.792 6.90673L17.7655 6.8723C16.2949 4.96175 13.7611 2.70825 9.99935 2.70825ZM3.2237 7.63475C4.58155 5.87068 6.79132 3.95825 9.99935 3.95825C13.2074 3.95825 15.4172 5.87068 16.775 7.63475C17.1405 8.10958 17.3546 8.3933 17.4954 8.71204C17.627 9.00993 17.7077 9.37403 17.7077 9.99992C17.7077 10.6258 17.627 10.9899 17.4954 11.2878C17.3546 11.6065 17.1405 11.8903 16.775 12.3651C15.4172 14.1292 13.2074 16.0416 9.99935 16.0416C6.79132 16.0416 4.58155 14.1292 3.2237 12.3651C2.85821 11.8903 2.64413 11.6065 2.50332 11.2878C2.37171 10.9899 2.29102 10.6258 2.29102 9.99992C2.29102 9.37403 2.37171 9.00993 2.50332 8.71204C2.64413 8.3933 2.85821 8.10958 3.2237 7.63475Z"
                          fill=""
                        />
                      </svg>
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <button
          className="rounded bg-black px-3 py-1 font-semibold text-white disabled:opacity-50 dark:bg-white dark:text-black"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          className="rounded bg-black px-3 py-1 font-semibold text-white disabled:opacity-50 dark:bg-white dark:text-black"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Order;
