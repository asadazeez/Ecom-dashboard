
import React from "react";
import { homePageApi } from "@/api/homePageApi";
import { storageUrl } from "@/utilis/baseUrl";
import Image from "next/image";
import Link from "next/link";

const Featured = async() => 
  {
    const response = await homePageApi.getHomepage()
    const featuredData = response.data.data.featured

   
   

  return (
    <div className="  text-center   text-xl dark:bg-slate-900 bg-blue-500 font-black  rounded-[10px] pt-3 pb-8 px-10  text-yellow-300 dark:text-white"> FEATURED PRODUCTS
      <div className="flex py-2  md:gap-6 no-scrollbar overflow-x-auto 2xl:gap-7.5">
        {featuredData.map((featured:any, index:number) => (
          <div
            key={index}
            className="rounded-[10px] w-[15rem]  shrink-0 my-6 bg-white p-6 shadow-3 dark:shadow-none dark:bg-gray-dark"
          >
          <Link href={`/admin/forms/product-form/view/${featured._id}`}>
            <div
              className="flex w-full  items-center justify-center "
             
            ><Image
             src= {storageUrl+ featured.image} alt="Featured Image"
             width={150}
             height={150}
             className="size-36 rounded-2xl object-cover"/>
            </div>

            <div className="mt-6 flex text-center   w-full items-end justify-center">
              <div>
                <h4 className="mb-1.5 line-clamp-3 text-ellipsis text-xl font-bold text-dark dark:text-white">
                  {featured.name}
                </h4>
                <span className="text-body-sm text-dark dark:text-white font-medium">{featured.price}</span>
              </div>

              
            </div>
          </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
