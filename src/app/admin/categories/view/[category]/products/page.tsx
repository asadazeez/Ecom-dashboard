import { productByCategoryApi } from "@/api/productByCategoryApi";
import ECommerce from "@/app/admin/dashboard/page";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { storageUrl } from "@/utilis/baseUrl";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const ProductPage = async ({params}:{ params: { category: string }}) => {

  const response = await productByCategoryApi.getProductByCategory(params.category)
  const shopData = response.data.data.products
  const {categoryname, description} = response.data.data.categoryData.at(0)
  
  
  return (
    <DefaultLayout>
      <div className="flex-col bg-white dark:bg-dark p-10 rounded-2xl flex pt-20 items-center">
        <div className="font-bold text-global-font-h5">
          {categoryname} Products
        </div>
        <div className="pt-3">{description} </div>
        <div className="grid  w-full gap-10 p-24 md:grid-cols-4 ">
          {shopData.map((item: any , index:number) => (
            <Link key={index} href={`/admin/forms/product-form/view/${item._id}`}>
           <div   className=" justify-center flex-col items-center flex     ">
            <div className="size-40   relative">
           <Image
             src={storageUrl + item.image}
             alt="image"
             fill
             className="object-cover rounded-xl"
           />
           </div>
           <div className="font-bold line-clamp-2 text-center  text-ellipsis mt-2  mb-[-1.5rem] text-base">
             {item.name}
           </div>
           <div className="font-extrabold  text-center  mt-6 text-xs">
             {" "}
             {item.price}
           </div>
         </div>
          </Link>
          ))}
        </div>
    
    </div>
    </DefaultLayout>
  );
};

export default ProductPage;
