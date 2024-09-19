"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useForm,Controller } from "react-hook-form";
import {  z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { brandApi } from "@/api/brandApi";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { serialize } from "object-to-formdata";
import SelectOne from "@/components/FormElements/SelectGroup/SelectOne";
import { bannerApi } from "@/api/bannerApi";
import FileUploaderSingle from "@/components/FormElements/FileUpload/fileUploaderSingle";
import Typography from '@mui/material/Typography'
import DropzoneWrapper from "@/components/styles/react-dropzone";
type Props ={
    category:any
    BannerId:any
    banner:any
}
const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const Schema = z.object({
  category:z.string().nonempty({message:"*Required"}),

  imageFile: z
  .any()
  .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
  .refine(
    (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
    "Only .jpg, .jpeg, .png and .webp formats are supported."
  )
});
type TSchema = z.infer<typeof Schema>;
const BannerUpdateForm = ({category,BannerId,banner}:Props) => {
  const router = useRouter()
  
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TSchema>({ resolver: zodResolver(Schema), defaultValues:{
    category:banner.category,imageFile:banner.image
  } });

  const submitData = async (data:any) => {
    try{
      const formdata = serialize(data)

      const response = await bannerApi.updateBanner(BannerId,formdata)
      if (response.data.success) {
        
        toast.success(response.data.message)

         router.push("/admin/tables/banner")
         router.refresh()
       }
      
    
      
    }catch(errors:any){
toast.error(errors.message)
 
    }
  };

  return (
    <>
      <Breadcrumb pageName="BANNER UPDATE FORM" />

      <div className=" gap-9 sm:grid-cols-2">
        <form onSubmit={handleSubmit(submitData)}>
          <div className="flex flex-col gap-9">
            {/* <!-- Input Fields --> */}
            <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
              <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
                <h3 className="font-medium text-dark dark:text-white">
                  UPDATE YOUR BANNER
                </h3>
              </div>
              <div className="flex flex-col gap-5.5 p-6.5">
              <SelectOne register={register('category')}
                name="Category" data={category}/>
                                                            <p className="text-red-700 text-xs">{errors.category?.message}</p>

              

               

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

                    <button
                      type="submit"
                      className=" w-fit rounded-md bg-black px-6 py-1 font-semibold text-white dark:bg-white dark:text-black"
                    >
                      {" "}
                      SUBMIT
                    </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default BannerUpdateForm;
