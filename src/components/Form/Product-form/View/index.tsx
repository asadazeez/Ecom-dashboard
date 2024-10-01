"use client";

import { storageUrl } from "@/utilis/baseUrl";
import Image from "next/image";
import Link from "next/link";

type Props = {
  product: any;
};

const ViewPage = ({ product }: Props) => {
  return (
    <div className="relative  grid gap-9 rounded-lg bg-white p-21 pb-14 text-black dark:bg-dark dark:text-white md:grid-cols-2">
        <div className="relative h-[15rem] w-full md:h-[25rem]">
      <div className="col-span-1 flex justify-center px-5">
          <Image
            src={storageUrl + product.image}
            alt="product image"
            fill
            className="rounded-2xl object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center gap-3 text-center md:text-start">
        <button >
          <Link href={`/admin/products/${product._id}`}>
      <svg
      
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        height={20}
        width={20}
        stroke="currentColor"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="miter"
       className="absolute top-13 right-13"
       
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <polygon
            points="18 2 22 6 11 17 7 17 7 13 18 2"
            fill="#059cf7"
            opacity="0.1"
            stroke-width="0"
          ></polygon>
          <polygon points="18 2 22 6 11 17 7 17 7 13 18 2"></polygon>
          <polyline points="21 14 21 22 2 22 2 3 10 3"></polyline>
        </g>
      </svg>
      </Link>
      </button>
        <div className="text-xl font-bold">{product.name}</div>
        <div className="text-4xl font-black">{product.price}</div>
        <div className="font-medium">{product.brandName}</div>
        <div className="font-medium">{product.categoryName}</div>
        <div className="font-medium">{product.description}</div>
      </div>
    </div>
  );
};

export default ViewPage;
