import React from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import ProductUpdateForm from "@/components/Form/Product-form/Edit";
import { productApi } from "@/api/productApi";
import { brandApi } from "@/api/brandApi";
import { categoryApi } from "@/api/categoryApi";

export const metadata: Metadata = {
  title: "Next.js Form Elements Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Form Elements page for NextAdmin Dashboard Kit",
};

async function getProductId(id:string){
  const response:any = await  productApi.getProductId(id)
  const response2:any = await  brandApi.getBrandList()
  const response3:any = await categoryApi.getCategoryList()
  return {response:response.data ,response2:response2.data,response3:response3.data}
}

const FormElementsPage =async ({params}:{params:{edit:string}}) => {
  const products = await getProductId(params.edit)

  const product = products.response.data
  const brands = products.response2.data
  const category = products.response3.data
  return (
    <DefaultLayout>
      <ProductUpdateForm ProductId ={params.edit} product={product} brands={brands} category={category} />
    </DefaultLayout>
  );
};

export default FormElementsPage;
