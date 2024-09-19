"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import SelectOne from "@/components/FormElements/SelectGroup/SelectOne";
import { productApi } from "@/api/productApi";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { serialize } from "object-to-formdata";

type Props={
  ProductId:any
  product:any
  brands:any
  category:any
}

const Schema = z
  .object({
    name: z
      .string().nonempty({message:"*Required"}),
      description:z.string().nonempty({message:"*Required"}),
      imageFile:z.any(),
      brand:z.any(),
      category:z.any(),
      price:z.coerce.number().positive({message:"*Required"})

  
      })    ;
 type TSchema = z.infer<typeof Schema>;
const ProductUpdateForm = ({ProductId,product,brands,category}:Props) => {

  


  const router = useRouter()
    
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<TSchema>({ resolver: zodResolver(Schema),defaultValues:{
        name:product.name,description:product.description,price:product.price,brand: product.brand, category: product.category,imageFile:product.image
      
       
      } });
      const submitData = async (data:any) => {
        try{

          const formdata = serialize({...data, imageFile:data.imageFile[0]})

       const response =   await productApi.updateProduct(ProductId,formdata)
       if (response.data.success) {
        
        toast.success(response.data.message)

         router.push("/tables/product")
         router.refresh()
       }

        }catch(errors:any){
        toast.error(errors.message)


        }

      };
      
  return (
    
    <>
      <Breadcrumb pageName="PRODUCT UPDATE FORM" />

      <div className=" gap-9 sm:grid-cols-2">
        <form onSubmit={handleSubmit(submitData)}>
        <div className="flex flex-col gap-9">
          {/* <!-- Input Fields --> */}
          <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
              <h3 className="font-medium text-dark dark:text-white">
               UPDATE YOUR PRODUCTS
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <div>
                <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                  PRODUCT NAME
                </label>
                <input
                  type="text"
                  {...register('name')}
                  placeholder="Product Name"
                  className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                />
                <p className="text-red-700 text-xs">{errors.name?.message}</p>
              </div>

              <div>
                <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                 PRODUCT DESCRIPTION
                </label>
                <input
                  type="text"
                  {...register('description')}
                  placeholder="Product Description"
                  className="w-full rounded-[7px] border-[1.5px] border-primary bg-transparent px-5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:bg-dark-2 dark:text-white"
                />
                  <p className="text-red-700 text-xs">{errors.description?.message}</p>
              </div>
              <div>
                <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                  PRODUCT PRICE
                </label>
                <input
                {...register('price')}
                  type="number"
                  placeholder="Product Price"
                  className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                />
                <p className="text-red-700 text-xs">{errors.price?.message}</p>
              </div>
              <SelectOne
              register={register('category')}
              name="Category"
              data={category}/>
            <SelectOne register={register('brand')} name="Brand" data={brands} />

             
              <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
              <h3 className="font-medium text-dark dark:text-white">
                File upload
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <div>
                <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                  Attach file
                </label>
                <input
                {...register('imageFile')}
                  type="file"
                  className="w-full cursor-pointer rounded-[7px] border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-[#E2E8F0] file:px-6.5 file:py-[13px] file:text-body-sm file:font-medium file:text-dark-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-dark dark:border-dark-3 dark:bg-dark-2 dark:file:border-dark-3 dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                />
            
              </div>

              
            </div>
              </div>
              <button type="submit" className=" bg-black dark:bg-white dark:text-black text-white rounded-md py-1 font-semibold w-fit px-6" > UPDATE</button>
            </div>
          </div>
        </div>
        </form>
      </div>
    </>
  );
};

export default ProductUpdateForm;
