"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useForm , Controller} from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import SelectOne from "@/components/FormElements/SelectGroup/SelectOne";
import { productApi } from "@/api/productApi";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { serialize } from "object-to-formdata";
import FileUploaderSingle from "@/components/FormElements/FileUpload/fileUploaderSingle";
import Typography from '@mui/material/Typography'
import DropzoneWrapper from "@/components/styles/react-dropzone";

type Props={
  ProductId:any
  product:any
  brands:any
  category:any
}

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const Schema = z
  .object({
    name: z
    .string().trim().min(1, {message:'Minimum one character required'}).nonempty({message:"*Required"}),
      description:z.string(),
      imageFile: z
      .any()
      .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        "Only .jpg, .jpeg, .png and .webp formats are supported."
      ),
      category:z.string().nonempty({message:"*Required"}),
      brand:z.string().nonempty({message:"*Required"}),
      price:z.coerce.number().positive({message:"*Required"})

  
      })    ;
 type TSchema = z.infer<typeof Schema>;
const ProductUpdateForm = ({ProductId,product,brands,category}:Props) => {

  


  const router = useRouter()
    
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
      } = useForm<TSchema>({ resolver: zodResolver(Schema),defaultValues:{
        name:product.name,description:product.description,price:product.price,brand: product.brand, category: product.category,imageFile:product.image
      
       
      } });
      const submitData = async (data:any) => {
        try{

          const formdata = serialize(data)

       const response =   await productApi.updateProduct(ProductId,formdata)
       if (response.data.success) {
        
        toast.success(response.data.message)

         router.push("/admin/tables/product")
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
                <textarea
                 {...register('description')}
                  rows={6}
                  placeholder="Product Description"
                  className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                ></textarea>
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
                              <p className="text-red-700 text-xs">{errors.category?.message}</p>

            <SelectOne register={register('brand')} name="Brand" data={brands} />
            <p className="text-red-700 text-xs">{errors.brand?.message}</p>


             
             
            <DropzoneWrapper>
                  <Typography variant='h6' sx={{ mb: 2.5 }}>
                    Image:
                    {!!errors.imageFile && (
                      <span style={{ color: 'red', fontSize: '14px' }}>Invalid Image format {!!errors.imageFile}</span>
                    )}
                  </Typography>
                  <Controller
                    name='imageFile'
                    control={control}
                    defaultValue=''
                    render={({ field }) => (
                      <div>
                        <FileUploaderSingle file={field.value} setFile={field.onChange} error={errors.imageFile} />
                      </div>
                    )}
                  />
                </DropzoneWrapper>
                <p className="text-red-700 text-xs">{errors.imageFile?.message?.toString()}</p>

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
