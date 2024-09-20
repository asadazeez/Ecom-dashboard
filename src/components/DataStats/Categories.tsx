import React from "react";
import { homePageApi } from "@/api/homePageApi";
import { storageUrl } from "@/utilis/baseUrl";
import Image from "next/image";
import See from "../../../public/images/icon/see-more";
import Link from "next/link";

const Categories = async () => {
  const response = await homePageApi.getHomepage();
  const categoryData = response.data.data.categories;

  return (
    <div className=" mt-7 rounded-[10px] bg-white px-10   pb-8 pt-3 text-heading-6 font-bold text-dark dark:bg-slate-900 dark:text-white">
      CATEGORIES
      <div className="grid grid-cols-1 justify-items-center gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {categoryData.map((category: any, index: number) => (
          <div
            key={index}
            className="relative mt-6 flex h-65 w-49  items-center justify-center rounded-lg  p-6 shadow-3 dark:shadow-none "
          >
            <Image
              src={storageUrl + category.image}
              alt="Category Image"
              fill
              className=" rounded-lg object-cover  "
            />

            <div className=" flex    justify-center">
              <h4 className=" z-50 rounded-xl bg-white/55 px-5 py-1 text-heading-6 font-bold text-dark dark:bg-slate-800/65 dark:text-white">
                {category.name}
              </h4>
            </div>
          </div>
        ))}

        <Link href={"/admin/tables/category"}>
          <div className="  relative mt-21 flex size-31 items-center dark:bg-slate-800 justify-center rounded-full  shadow-3 hover:shadow-6 dark:shadow-2xl ">
            <div className="w-full text-black dark:text-white text-center text-base font-satoshi font-normal">
              <See className=" mb-1 flex size-8 w-full justify-center" />
              See More!
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
